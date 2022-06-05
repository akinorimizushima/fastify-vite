import Fastify from "fastify";
import { route } from "./routes/root.js";
import { ApolloServer, gql } from "apollo-server-fastify";
import fs from "fs";
import path from "path";
import * as resolvers from "./resolvers.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const schema = fs.readFileSync(path.join(__dirname, "schema.graphql"), {
  encoding: "utf8",
});
const typeDefs = gql(schema);
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = Fastify({ logger: true });

const startServer = async () => {
  await server.start();
  app.register(server.createHandler());
  app.register(route);

  if (import.meta.env.PROD) {
    try {
      app.listen(3000);
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  }
  return app;
};

export const viteNodeApp = startServer();
