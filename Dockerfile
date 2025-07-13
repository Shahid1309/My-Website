# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with sharp
RUN npm install && \
    npm install sharp && \
    npx update-browserslist-db@latest && \
    npx browserslist@latest --update-db

# Copy app files
COPY . .

# Create temporary ESLint config
RUN echo '{"extends":"next/core-web-vitals","rules":{"react/no-unescaped-entities":"off"}}' > .eslintrc.json

# Build the app
RUN npm run build

# Clean up (optional)
RUN rm .eslintrc.json

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]