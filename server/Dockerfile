FROM node:20.10.0   
WORKDIR /app/server
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install
COPY . .    
EXPOSE 3000   
CMD ["npm", "run", "dev"]