# Dockerfile

# Pull the base image
FROM node:21.6.2-alpine

# set working directory
# RUN mkdir /usr/src/app
#copy all files from current directory to docker
COPY . /usr/src/app
COPY ./node_modules /usr/src/app

WORKDIR /usr/src/app

# install and cache app dependencies
RUN yarn

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# start app
CMD ["npm", "start"]