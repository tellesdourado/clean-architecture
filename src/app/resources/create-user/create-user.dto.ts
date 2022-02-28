import { User } from "../../entities/user/user.entity";

export class CreateUserDto implements Omit<User, "id"> {
  firstName: string;
  lastName: string;
  age: number;
}
