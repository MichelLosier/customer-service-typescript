# Customer Service

## About

This service provides a graphql interface for retrieving customer information.

## Technologies

- NodeJS with [Typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/) - Provides a Graphql server framework
- [Express](https://expressjs.com/en/guide/routing.html) - Provides middleware for our server and defining routing aside from the graphql endpoint
- [Postgres](https://www.postgresql.org/docs/) - Postgres is used as our database for customer data
- [Prisma](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference) - Used as our ORM with the Postgres DB
  - It offers a lightweight Schema based ORM configuration
  - Client offers easeful strategies for n+1 avoidance in graph based queries
  - Has utilties for migrations and seeding
- [Docker](https://docs.docker.com/compose/) - Docker Compose is used to bring up our database.

## Setup

- `git clone` the repository
- Create a `.env` file with the following values

```
CUSTOMER_DB_ENDPOINT=postgres://postgres:password@localhost:5432/customerdb
POSTGRES_PASSWORD=password
```

- Run `npm install` in the project root directory
- Run `docker-compose --env-file .env up` to bring up the database
- Run `npx prisma migrate dev --name init` to initialize the database schema
- Run `npx prisma db seed --preview-feature` to seed the database with mock data.
- Run `npm start` to bring up the service
