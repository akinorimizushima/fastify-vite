import { FastifyInstance } from "fastify";
import { Static, Type } from "@sinclair/typebox";

export const route = async (fastify: FastifyInstance) => {
  fastify.get("/", async () => {
    return { hello: "world23345" };
  });
};

const User = Type.Object({
  name: Type.Union([Type.String(), Type.Number(), Type.Null()]),
  mail: Type.Optional(Type.String({ format: "email" })),
});
type UserType = Static<typeof User>;

export const post = async (fastify: FastifyInstance) => {
  fastify.post<{ Body: UserType }>(
    "/",
    { schema: { body: User } },
    async (request) => {
      request.body?.name;
      request.body?.mail;
      return { hello: "post" };
    }
  );
};
