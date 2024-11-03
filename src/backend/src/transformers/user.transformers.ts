import { Prisma } from "@prisma/client";
import { userQueryArgs } from "../prisma-query-args/user.query-args";
import { User, UserRole } from "../../../shared";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

export const userTransformer = (
  user: Prisma.UserGetPayload<typeof userQueryArgs>
): User => {
  if (!user) return null;

  const isAdmin = ADMIN_EMAIL && user.email === ADMIN_EMAIL;
  return {
    ...user,
    role: isAdmin ? UserRole.ADMIN : UserRole.GUEST,
  };
};
