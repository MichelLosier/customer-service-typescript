# Customer Service

## About

This project includes both the service application and client app for retrieving customer information.

- [Customer Service (server)]("packages/server/README.md)
- [Client app]("packages/client/README.md)

## Technologies

- [Customer Service technologies]("packages/server/README.md#Technologies)
- [Client app technologies]("packages/client/README.md#Technologies")
- [Docker](https://docs.docker.com/compose/) - Docker Compose is used to bring up our database.

## Structure

The client and server applications are found respectively in the ./packages directory. From the project root you can run `yarn` commands to run the specific project scripts (see below).

## Setup

- `git clone` the repository
- Create a `.env` file in `./packages/server` with the following values

```
CUSTOMER_DB_ENDPOINT=postgres://postgres:password@localhost:5432/customerdb
POSTGRES_PASSWORD=password
```

The following commands can be used to bring up different components of the project:

- `yarn install` in the project root directory
- `yarn db-up` to bring up the database
- `yarn db-migrate` to initialize the database schema
- `yarn db-seed` to seed the database with mock data.
- (optional) `yarn client build` to create a production build of the client app. Recommend just using development server launched with `client-start`
- `yarn server-start` to bring up the server
- `yarn client-start` to bring up the client web app

## Tests

- `yarn client-test` to run tests for the client app
- `yarn server-start` to run run tests for the server app. Note: Make sure the database is up and seeded.

## Use

The client app development server will run on `localhost:3000`. Builds

The server is available on `localhost:6001`.

- A build of the client app will be served on `localhost:6001/`
- A GraphiQL app to interact with the graphql API is served on `localhost:6001 graphql`.
  - The graphql schema and docs are available through the GraphiQL app.
