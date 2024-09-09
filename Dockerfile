FROM node:22 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /srv/nginx/pages/www/dist

EXPOSE 8081

CMD [ "nginx", "-g", "daemon off;" ]
