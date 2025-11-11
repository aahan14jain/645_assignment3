# Step 1: Build React app using Node
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app for production
RUN npm run build


# Step 2: Serve the production build with Nginx
FROM nginx:stable-alpine

# Copy build output to Nginx's static file directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx when container runs
CMD ["nginx", "-g", "daemon off;"]
