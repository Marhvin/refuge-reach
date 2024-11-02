Setting up db
1. `docker run --name refuge-reach -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
2. `docker exec -ti refuge-reach psql -U postgres -c "CREATE DATABASE refuge_reach;"`
3. `yarn prisma migrate reset`