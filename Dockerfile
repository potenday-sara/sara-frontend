# build environment
FROM node:20 as build
RUN npm install -g yarn
WORKDIR /app
COPY package.json ./
COPY yarn-lock.json ./
RUN yarn install --silent
COPY . ./
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
