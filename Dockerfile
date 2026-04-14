# 1. Choose base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy source code
COPY . .

# 6. Expose port
EXPOSE 3000

# 7. Run the app
CMD ["node", "index.js"]
