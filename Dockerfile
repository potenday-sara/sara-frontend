# build environment
FROM node:20 as build
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
COPY . ./
RUN yarn build

# production environment
# FROM node:20 as production
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


RUN apt-get update && \
    apt-get install -y libpq-dev && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

EXPOSE 3000
CMD ["yarn", "start:next"]
