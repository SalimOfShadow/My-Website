# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory to /home/SalimWebsite/backend
WORKDIR /home/SalimWebsite/backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Command to run the app
CMD ["npm", "start"]