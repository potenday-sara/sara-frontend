# build environment
FROM node:20 as build
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
COPY . ./
RUN yarn build:next
RUN #yarn start:next

# production environment
FROM nginx:stable-alpine
COPY --from=build /src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
