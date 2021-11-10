FROM node:16.13 as build

WORKDIR /hatsos
COPY package*.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/public /usr/share/nginx/html