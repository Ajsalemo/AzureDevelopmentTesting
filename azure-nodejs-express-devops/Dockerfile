# Build environment
FROM node:12.18.2-alpine3.9 as build
WORKDIR /app
COPY package.json ./
RUN yarn install

COPY . ./

# Production environment
FROM node:12.18.2-alpine3.9
COPY --from=build /app/ /app
COPY sshd_config /etc/ssh/
COPY ./entrypoint.sh /opt

# Start and enable SSH
RUN apk add openssh \
     && echo "root:Docker!" | chpasswd \
     && chmod +x /opt/entrypoint.sh 

WORKDIR /etc/ssh 
RUN ssh-keygen -A

EXPOSE 8080 2222

ENTRYPOINT [ "/opt/entrypoint.sh" ] 
