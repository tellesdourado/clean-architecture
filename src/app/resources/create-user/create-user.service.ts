import { Database } from "../../../core/adapters/contracts/database";
import { Service } from "../../contracts/service";
import { User } from "../../entities/user/user.entity";
import { CreateUserDto } from "./create-user.dto";

export class CreateUserService implements Service {
  constructor(private database: Database) {}
  async run(createUserDto: CreateUserDto) {
    const user = await this.database
      .collection("user")
      .create<User>(createUserDto);
    return user;
  }
}
