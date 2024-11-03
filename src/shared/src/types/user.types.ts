export enum UserRole {
  ADMIN = "ADMIN",
  GUEST = "GUEST",
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
