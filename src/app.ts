import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { context, graph } from "./gql";

const app = express();
const server = new ApolloServer({
  schema: makeExecutableSchema(graph),
  context: context,
});
server.applyMiddleware({ app });

export default app;
