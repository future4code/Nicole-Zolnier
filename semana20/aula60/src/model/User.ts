import { CustomError } from "../errors/CustomError";

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: UserRole
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getRole(): UserRole {
    return this.role;
  }
}

export const stringToUserRole = (input: string): UserRole => {
  switch (input) {
    case "NORMAL":
      return UserRole.NORMAL;
    case "ADMIN":
      return UserRole.ADMIN;
    default:
      throw new CustomError(422, "Invalid user role");
  }
};

export enum UserRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}
