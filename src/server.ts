import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import graph from "./gql";

const PORT = 3000;

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    schema: makeExecutableSchema(graph),
  });

  await server.start();
  server.applyMiddleware({ app });

  await new Promise((resolve) =>
    app.listen({ port: PORT }, () => {
      resolve(null);
    })
  );

  console.log(`Customer Service running at http://localhost:${PORT}`);
}

startApolloServer();
