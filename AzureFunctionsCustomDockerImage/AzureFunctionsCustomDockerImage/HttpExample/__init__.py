import json
import logging
import os

import azure.functions as func
import psycopg2
from psycopg2 import pool


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    # Prod
    AZURE_POSTGRES_USERNAME = os.getenv('AZURE_POSTGRES_USERNAME')
    AZURE_POSTGRES_PASSWORD = os.getenv('AZURE_POSTGRES_PASSWORD')
    AZURE_POSTGRES_HOST = os.getenv('AZURE_POSTGRES_HOST')
    AZURE_POSTGRES_DATABASE = os.getenv('AZURE_POSTGRES_DATABASE')
    AZURE_POSTGRES_SSL_MODE = "require"

    prod_conn_str = "host={0} user={1} dbname={2} password={3} sslmode={4}".format(AZURE_POSTGRES_HOST, AZURE_POSTGRES_USERNAME, AZURE_POSTGRES_DATABASE, AZURE_POSTGRES_PASSWORD, AZURE_POSTGRES_SSL_MODE)
    # Set a min of 1 to a max of 128 connections in the pool
    conn = psycopg2.pool.SimpleConnectionPool(1, 128, prod_conn_str)

    try:
        if (conn):
            print("Connection pool successfully created.")
    except (Exception, psycopg2.DatabaseError) as error :
        print ("Error while creating the Postgres connection pool: ", error)   


    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        try:    
            # Get connections from the pool
            psql_conn = conn.getconn()
            psql_cursor = psql_conn.cursor()

            if (psql_conn):
                print("Successfully recieved a connection from the pool.")

                psql_cursor.execute("SELECT * FROM specifications")
                rows = psql_cursor.fetchall()
                altered_msg = { 
                    "message": f"Hello, {name}. Here is some data", 
                    "result": rows 
                }
                json_resp = json.dumps(altered_msg)
                psql_cursor.close()
                # Put the connection back in the pool
                conn.putconn(psql_conn)
                print("Connection has been put back into the pool.")
                return func.HttpResponse(json_resp)
        except (Exception, psycopg2.DatabaseError) as error :
            print ("Error while connecting to PostgreSQL:", error)   
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )
