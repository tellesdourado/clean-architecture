import { HttpResponse } from "../../../../src/app/contracts/http";
import { User } from "../../../../src/app/entities/user/user.entity";
import { CreateUserController } from "../../../../src/app/resources/create-user/create-user.controller";
import { CreateUserDto } from "../../../../src/app/resources/create-user/create-user.dto";
import { CreateUserService } from "../../../../src/app/resources/create-user/create-user.service";
import { DatabaseFake } from "../../../fake/database.fake";

describe(`CreateUserController`, () => {
  it("should not to throw", async () => {
    const database = new DatabaseFake();
    const createUserService = new CreateUserService(database);
    const controller = new CreateUserController(createUserService);

    const createUserDto = new CreateUserDto();
    createUserDto.age = 26;
    createUserDto.firstName = "Teles";
    createUserDto.lastName = "Dourado";

    const { body, statusCode }: HttpResponse = await controller.action({
      body: createUserDto,
    });

    expect(body.id).not.toBeNull();
    expect(statusCode).toEqual(201);
  });

  //   it("should not to throw", () => {
  //     const controller = new ExampleController();

  //     expect(controller.action({ body: { fly: true } })).resolves.toEqual({
  //       statusCode: 201,
  //     });
  //   });
});
