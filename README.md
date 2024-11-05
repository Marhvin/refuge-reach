# refuge-reach

## What is this repository?

This repository contains the source code for the Urban Refuge website. This repository is a mono repo that contains the frontend (React, Vite, Tailwind) and backend (Express, Prisma, Postgres).

## I want to contribute. How do I start?

Before getting started, you will need to download a few applications / services required to run the website on your computer.

### Requirements

- Node.js 18.x or higher - [download](https://nodejs.org/en/blog/release/v18.20.2)
- Yarn - install by running `npm install -g yarn` in your terminal (after installing Node) [Note: you may need to run `sudo npm install -g yarn` instead on Unix-like systems like MacOS and Linux if you are getting permission errors]
- Docker Desktop - [download](https://www.docker.com/products/docker-desktop/)
- Google Cloud Platform Application with OAuth setup (client credentials) and an API key with Google Maps services - step 1 in [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) and follow steps to enable APIs in [maps](https://developers.google.com/maps/documentation/javascript/cloud-setup)

### Further configuration

The frontend and backend will require further configuration settings to get the app running. See the "Configuring the application settings" section of [/src/frontend/README.md](https://github.com/Marhvin/refuge-reach/blob/main/src/frontend/README.md) and [/src/backend/README.md](https://github.com/Marhvin/refuge-reach/blob/main/src/backend/README.md) and follow those steps before returning. You are encouraged to read these whole files to learn more!

### Starting to develop

Now you can begin development! Below are some commands that you may find useful in your development.

- `yarn install` - installs dependencies required to run the application
- `yarn start` - runs the whole application (frontend and backend) in one command
- `yarn frontend` - runs only the frontend
- `yarn backend` - runs only the backend/API
- `yarn prisma:studio` - allows you to inspect and edit data in the database
- `yarn prisma:reset` - resets the database and applies migrations from the schema to the database, then seeds the database with the data in [seed.ts](https://github.com/Marhvin/refuge-reach/blob/main/src/backend/src/prisma/seed.ts)

## Contributors

Thanks to the awesome contributors who helped make this website. This website was first created during BostonHacks 2024 at Boston University, and has been ongoing development since!

- Alan Eng - [alaneng-neu](https://github.com/alaneng-neu), [alneng](https://github.com/alneng/)
- Marvin Hoang - [Marhvin](https://github.com/Marhvin)
- Wilson Wei - [wilsnwei](https://github.com/wilsnwei)

Questions may be redirected to Alan by email: eng.al@northeastern.edu
