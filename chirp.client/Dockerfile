# First stage: Build stage
FROM node:20 AS enoch
WORKDIR /app
COPY package*.json ./
RUN NODE_ENV=development npm install
COPY . .
ARG VITE_CERT
ENV VITE_URL "https://api.enoch-chirp.duckdns.org"

RUN npm run build

# Second stage: Serve with Nginx
FROM nginx:1.27.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=enoch /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]