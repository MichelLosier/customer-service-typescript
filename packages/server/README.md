# Customer Service

## About

This service provides a graphql interface for retrieving customer information, and serves the client app.

## Technologies

- [NodeJS v12](https://nodejs.org/en/) with [Typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [GraphQL](https://graphql.org/) - We use a GraphQL API here to minimize client requests and client reconstruction of object relationships.
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/) - Provides a Graphql server framework
- [Express](https://expressjs.com/en/guide/routing.html) - Provides middleware for our server and defining routing aside from the graphql endpoint
- [Postgres](https://www.postgresql.org/docs/) - Postgres is used as our database for customer data
- [Prisma](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference) - Used as our ORM with the Postgres DB

  - It offers a lightweight Schema based ORM configuration
  - Client offers easeful strategies for n+1 avoidance in graph based queries
  - Has utilties for migrations and seeding

  ## Setup

  Use the yarn commands in the project root.
