FROM node:20.10.0   
WORKDIR /app/client
COPY package*.json ./
RUN npm install
COPY . .    
EXPOSE 5173    
CMD ["npm", "run", "dev"]