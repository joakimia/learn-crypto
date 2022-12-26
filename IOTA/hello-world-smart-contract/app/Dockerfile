FROM node:12

# Create a working directory
WORKDIR /app

# Copy the package.json file
COPY package.json .

# Install the dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the port for the smart contract
EXPOSE 8080

# Run the smart contract
CMD ["npm", "start"]
