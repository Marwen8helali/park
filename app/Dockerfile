# get the base node image
FROM node:latest

# set the working dir for container
WORKDIR /application

# copy the json file first
COPY ./package.json /application
COPY ./package-lock.json /application

# install npm dependencies
RUN npm install

# copy other project files
COPY . .
EXPOSE 9000

# build the folder
CMD [ "npm", "run", "start" ]
