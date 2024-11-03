import { Prisma } from "@prisma/client";
import { userQueryArgs } from "../prisma-query-args/user.query-args";
import { User, UserRole } from "../../../shared";
import { isAdmin } from "../utils/user.utils";

export const userTransformer = (
  user: Prisma.UserGetPayload<typeof userQueryArgs>
): User => {
  if (!user) return null;

  const isUserAdmin = isAdmin(user.email);
  return {
    ...user,
    role: isUserAdmin ? UserRole.ADMIN : UserRole.GUEST,
  };
};
