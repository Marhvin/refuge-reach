# TO BE RUN FROM DOCKER COMPOSE. DO NOT RUN MANUALLY AS CONTEXT IS NOT SET CORRECTLY

##################### BUILD #####################

FROM node:18 AS build

# Set the working directory
WORKDIR /app/src

# Copy the application code and types
COPY src/backend/src ./backend/src
COPY src/backend/tsconfig.json ./backend/tsconfig.json
COPY src/shared ./shared

WORKDIR /app/src/backend

# Copy package.json and install dependencies
COPY src/backend/package.json .
COPY yarn.lock .
RUN yarn install

RUN yarn prisma:generate
RUN yarn build

##################### PROD #####################

FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY src/backend/package.json .
COPY yarn.lock .
RUN yarn install --production

# Copy the built Express app
COPY --from=build /app/src/backend/dist dist

# Generate the prisma client
COPY src/backend/src/prisma ./src/prisma
RUN yarn prisma:generate

# Set environment variables
ENV NODE_ENV=production

# Expose the Express port
EXPOSE ${EXPRESS_PORT}

# Run the Express application
CMD ["yarn", "preview"]