# frontend

## What is this folder?

This folder contains the frontend of this web application. It is a React app powered with Vite, written in TypeScript and styled with Tailwind CSS and some shadcn components.

## Getting Started

### Configuring the application settings

You will need to setup a `.env` file at `/src/frontend/.env`. This file holds secrets and other configurations that the app needs to run. Copy and paste the following into your `.env` file, and fill in or change the information as needed.

```env
VITE_DONATION_URL="https://www.urbanrefuge.org/checkout/donate?donatePageId=5dc21c97c6f9485f71434028"
VITE_GOOGLE_OAUTH_CLIENT_ID=""
VITE_GOOGLE_MAPS_API_KEY=""
VITE_GOOGLE_MAP_ID="8a70719044abaac4"
VITE_GOOGLE_REDIRECT_URI="http://localhost:5173/user/auth/callback"
```

### Starting to develop

Now you can begin development! Below are some commands that you may find useful in your frontend development (note that the commands are intended to be run from the root directory of the project).

- `yarn install` - installs dependencies required to run the application
- `yarn start` - runs the whole application (frontend and backend) in one command
- `yarn frontend` - runs only the frontend
