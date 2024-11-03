Setting up db

1. `docker run --name refuge-reach -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
2. `docker exec -ti refuge-reach psql -U postgres -c "CREATE DATABASE refuge_reach;"`
3. `yarn prisma migrate reset`

.env File

```env
DATABASE_URL="postgresql://postgres:docker@localhost:5432/mydb?schema=public"
CORS_OPTIONS='{"origin":["http://localhost:5173", "http://localhost:4173"],"credentials":true,"methods":"GET,POST,OPTIONS"}'
COOKIE_SETTINGS='{"httpOnly":true,"secure":false,"sameSite":"lax","path":"/"}'
GOOGLE_OAUTH_CLIENT_ID=""
GOOGLE_OAUTH_CLIENT_SECRET=""
REDIRECT_URI="http://localhost:5173/user/auth/callback"
```
