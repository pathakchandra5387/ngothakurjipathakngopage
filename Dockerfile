# Use the official Nginx image
FROM nginx:alpine

# Copy the website files to the Nginx html directory
COPY . /usr/share/nginx/html

# Copy custom nginx config for port 8080
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080 (Cloud Run default)
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]