FROM node:14


# Create app directory
WORKDIR /usr/src/nodejs-masterclass


# Bundle app source
COPY . .

# Bind the app to a public Port
EXPOSE 8080


# Command to run the APP
CMD [ "node", "server.js" ]

