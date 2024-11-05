FROM node:20 AS enoch
WORKDIR /app
COPY package*.json ./
RUN NODE_ENV=development npm i
COPY . .

RUN npm run build

FROM nginx:1.27.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
