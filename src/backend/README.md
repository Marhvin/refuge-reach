# backend

## What is this folder?

This folder contains the backend/API of this web application. It is an Express.js app written in TypeScript and uses Prisma to interact with a PostgreSQL database.

## Getting Started

To start, you will need to have a few applications / services downloaded for development. You may have already downloaded them from main [README.md](https://github.com/Marhvin/refuge-reach/blob/main/README.md), but if you haven't then you should before starting.

### Requirements

- Node.js 18.x or higher - [download](https://nodejs.org/en/blog/release/v18.20.2)
- Yarn - install by running `npm install -g yarn` in your terminal (after installing Node) [Note: you may need to run `sudo npm install -g yarn` instead on Unix-like systems like MacOS and Linux if you are getting permission errors]
- Docker Desktop - [download](https://www.docker.com/products/docker-desktop/)
- Google Cloud Platform Application with OAuth setup (client credentials) and an API key with Google Maps services - step 1 in [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) and follow steps to enable APIs in [maps](https://developers.google.com/maps/documentation/javascript/cloud-setup)

### Configuring the application settings

You will need to setup a `.env` file at `/src/backend/.env`. This file holds secrets and other configurations that the app needs to run. Copy and paste the following into your `.env` file, and fill in or change information (e.g. secrets and keys, admin email).

```env
# Secrets and keys
GOOGLE_OAUTH_CLIENT_ID=""
GOOGLE_OAUTH_CLIENT_SECRET=""
GOOGLE_MAPS_API_KEY=""
# Configurations
ADMIN_EMAIL="youremail@gmail.com"
CORS_OPTIONS='{"origin":["http://localhost:5173", "http://localhost:4173"],"credentials":true,"methods":"GET,POST,OPTIONS"}'
REDIRECT_URI="http://localhost:5173/user/auth/callback"
PORT=5767
# Other
COOKIE_SETTINGS='{"httpOnly":true,"secure":false,"sameSite":"lax","path":"/"}'
DATABASE_URL="postgresql://postgres:docker@localhost:5432/mydb?schema=public"
```

Now, before we start coding, we will need to setup the database. Run the following commands in your terminal. Note that you should be in the root directory of the project, and not in the `/src/backend/` folder when you run these commands.
1. `yarn install`
2. `docker run --name urban-refuge -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
3. `docker exec -ti urban-refuge psql -U postgres -c "CREATE DATABASE urban_refuge;"`
4. `yarn prisma:reset`

### Starting to develop

Now you can begin development! Below are some commands that you may find useful in your backend development (note that the commands are intended to be run from the root directory of the project).

- `yarn install` - installs dependencies required to run the application
- `yarn start` - runs the whole application (frontend and backend) in one command
- `yarn backend` - runs only the backend/API
- `yarn prisma:studio` - allows you to inspect and edit data in the database
- `yarn prisma:reset` - resets the database and applies migrations from the schema to the database, then seeds the database with the data in [seed.ts](https://github.com/Marhvin/refuge-reach/blob/main/src/backend/src/prisma/seed.ts)
- `yarn prisma:migrate` - creates a new migration when you make changes to the `schema.prisma` file
