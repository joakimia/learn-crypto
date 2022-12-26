FROM node:12

# Create the app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
RUN npm install

# Copy the app source code
COPY . .

# Build the app
RUN npm run build

# Expose the app port
EXPOSE 8080

# Run the app
CMD ["npm", "start"]
