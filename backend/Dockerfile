FROM node:16-alpine

 WORKDIR /app_backend

 COPY package*.json ./

 RUN npm install

 COPY . .

 EXPOSE 3005

 CMD ["npm", "run", "startNodemon"]