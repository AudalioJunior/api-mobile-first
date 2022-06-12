import { User } from "../../../entity/User";
import UserRepository from "../../../repository/UserRepository";
import IUpdateUserUseCase from "./IUpdateUserUseCase";

export default class UpdateUserUseCase implements IUpdateUserUseCase {
  private userRepository = new UserRepository();

  async update(user: User) {
    try {
      const userUpdateDb = await this.userRepository.update(user);
      return userUpdateDb;
    } catch (error) {
      console.error(error);
      return error
    }
  }
}