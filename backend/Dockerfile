# Use Node.js 22 LTS as the base image
FROM node:22-alpine

# Install yt-dlp and ffmpeg using Alpine's apk package manager
RUN apk add --no-cache ffmpeg yt-dlp

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock for installing dependencies
COPY backend/package.json ./
COPY yarn.lock ./

# Install Node.js dependencies
RUN yarn install
RUN yarn global add @nestjs/cli
# Copy all backend files to the working directory
COPY backend/ ./

# Create the downloads directory
RUN mkdir -p /usr/src/app/downloads

# Expose port 3000 for the NestJS app
EXPOSE 3000

# Start the NestJS app
CMD ["yarn", "start:dev"]
