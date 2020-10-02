# get the base node image
FROM node:latest

# set the working dir for container
WORKDIR /park-app

# copy the json file first
COPY ./package.json /usr/src/app/

# install npm dependencies
RUN npm install

# copy other project files
COPY . .
EXPOSE 3000

# build the folder
CMD [ "npm", "run", "start" ]