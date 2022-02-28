import { Controller } from "../../contracts/controller";
import { HttpRequest, HttpResponse } from "../../contracts/http";
import { Service } from "../../contracts/service";
import { User } from "../../entities/user/user.entity";
import { response } from "../../shared/response-helper/response.helper";
import { CreateUserDto } from "./create-user.dto";

export class CreateUserController implements Controller {
  constructor(private createUserService: Service) {}
  async action(request: HttpRequest<CreateUserDto>): Promise<HttpResponse> {
    const user = await this.createUserService.run<User>(request.body);

    return response.status(201).body(user).build();
  }
}
