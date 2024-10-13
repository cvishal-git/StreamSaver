# Use Node.js 22 LTS as the base image
FROM node:22-alpine

# Install FFmpeg
RUN apk add --no-cache ffmpeg

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock for installing dependencies
COPY backend/package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy all backend files to the working directory
COPY backend/ ./

# Expose port 3000 for the NestJS app
EXPOSE 3000

# Start the NestJS app
CMD ["yarn", "start:dev"]
