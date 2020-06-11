FROM node:14.4.0-slim
WORKDIR /home/wiseeco
COPY package.json ./
RUN npm install
COPY src/ ./src/
COPY public/ ./public/
COPY .env ./
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-p", "3000"]