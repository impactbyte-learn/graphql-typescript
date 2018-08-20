import "reflect-metadata";
import { readFileSync } from "fs";
import { join } from "path";
import { GraphQLServer } from "graphql-yoga";
import { createConnection, Connection } from "typeorm";

import resolvers from "./resolvers";

createConnection()
  .then(async (connection: Connection) => {
    console.log("[database] connected!");
    const typeDefs = readFileSync(join(__dirname, "./schema.graphql"), "utf8");
    const server = new GraphQLServer({
      resolvers,
      typeDefs,
      context: ctx => ({ ...ctx, db: connection })
    });
    server.start(() => console.log("[server] listening ..."));
  })
  .catch(() => console.log("[database] ERROR! (can't connect to database)"));
