# base image
FROM node:23-alpine

# make the the folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# install vue CLI
RUN npm install -g @vue/cli
# install project dependencies
RUN npm install

# build app for production with minification
# RUN npm run build

EXPOSE 8080
CMD [ "npm", "run", "serve","--","--host","0.0.0.0" ]
# docker build -t portfolio:vue.js .
# docker run -it -p 8080:8080 portfolio:vue.js