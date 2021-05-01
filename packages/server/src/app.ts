import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { context, graph } from "./gql";
import path from "path";

const app = express();
const server = new ApolloServer({
  schema: makeExecutableSchema(graph),
  context: context,
});
server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

export default app;
