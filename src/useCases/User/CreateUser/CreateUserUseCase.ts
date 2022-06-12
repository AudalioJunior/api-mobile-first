import { User } from "../../../entity/User";
import UserRepository from "../../../repository/User/UserRepository";
import ICreateUserUseCase from "./ICreateUserUseCase";

export default class CreateUserUseCase implements ICreateUserUseCase {
  private userRepository = new UserRepository();

  async execute(user: User) {
    try {
      const userSaveDb = await this.userRepository.create(user);
      return userSaveDb
    } catch (error) {
      console.error(error)
      return error
    }
  }
}