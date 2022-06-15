FROM node:12.16.1

EXPOSE 3000

WORKDIR /app

RUN apt-get update 

RUN npm install -g nodemon;

# Copy files to app directory
COPY . /app

RUN npm install;

# Define run script
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]