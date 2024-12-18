
FROM node:16

# install simple http server for serving static content
RUN npm install -g http-server

# make the the folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
# RUN npm run build

EXPOSE 8080
CMD [ "npm", "run", "serve","--","--host","0.0.0.0" ]
# docker build -t portfolio:vue.js .
# docker run -it -p 8080:8080 portfolio:vue.js