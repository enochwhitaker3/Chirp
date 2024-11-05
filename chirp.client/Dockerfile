FROM node:20 AS enoch

ENV NODE_ENV=development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx

RUN rm -rf html
RUN mkdir html

COPY --from=enoch ./app/dist /usr/share/nginx/html
COPY client-default.conf /etc/nginx/conf.d/default.conf
 
CMD [ "nginx", "-g", "daemon off;" ]
