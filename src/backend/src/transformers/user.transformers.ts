import { Prisma } from "@prisma/client";
import { userQueryArgs } from "../prisma-query-args/user.query-args";
import { User } from "../../../shared";

export const userTransformer = (
  user: Prisma.UserGetPayload<typeof userQueryArgs>
): User => {
  if (!user) return null;
  return {
    ...user,
  };
};
