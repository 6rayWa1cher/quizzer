# Frontend build based on Node.js
FROM node:16 as build-stage
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci
COPY . /app
RUN npm run build

# Stage 1
# Production build based on Nginx with artifacts from Stage 0
FROM nginx:1.20.2
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/forms-gen-angular /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]