FROM node:12.16.1

EXPOSE 3000

WORKDIR /app

RUN apt-get update 

# Copy files to app directory
COPY . /app

RUN npm install;

# Define run script
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]