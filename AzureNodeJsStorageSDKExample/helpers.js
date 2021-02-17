const { BlobServiceClient } = require("@azure/storage-blob");
const { v1: uuid } = require("uuid");

// Environment variable connection string
const AZURE_STORAGE_CONNECTION_STRING = `${process.env.AZURE_STORAGE_CONNECTION_STRING}`;
// Create the BlobServiceClient object which will be used to create a container client
const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);
// Create a unique name for the container
const containerName = "general-container";
// Get a reference to a container
const containerClient = blobServiceClient.getContainerClient(containerName);

async function getContainerName() {
  try {
    console.log("Azure Blob storage v12 - JavaScript quickstart sample");
    console.log("\nFinding container...");
    console.log("\t", containerName);
  } catch (error) {
    console.log("An error occurred while trying to locate the container");
    console.log(error);
  }
}

async function uploadBlobToContainer() {
  try {
    // Create a unique name for the blob
    const blobName = "quickstart" + uuid() + ".txt";
    // Get a block blob client
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    console.log("\nUploading to Azure storage as blob:\n\t", blobName);
    // Upload data to the blob
    const data = "Hello, World!";
    const uploadBlobResponse = await blockBlobClient.upload(data, data.length);
    console.log(
      "Blob was uploaded successfully. requestId: ",
      uploadBlobResponse.requestId
    );
  } catch (error) {
    console.log("An error occurred while attempting to upload the blob");
    console.log(error);
  }
}

async function listAllBlobs() {
  try {
    console.log("\nListing blobs...");
    // List the blob(s) in the container.
    for await (const blob of containerClient.listBlobsFlat()) {
      console.log("\t", blob.name);
    }
  } catch (error) {
    console.log("An error occurred while listing blobs");
    console.log(error);
  }
}

module.exports = {
  getContainerName: getContainerName,
  uploadBlobToContainer: uploadBlobToContainer,
  listAllBlobs: listAllBlobs,
};
