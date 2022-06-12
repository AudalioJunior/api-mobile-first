import UserRepository from "../../../repository/UserRepository";
import IGetOneUserUseCase from "./IGetOneUserUseCase";

export default class GetOneUserUseCase implements IGetOneUserUseCase {
  private userRepository = new UserRepository();

  async execute(email: string) {
    try {
      const responseDb = await this.userRepository.getUser(email);
      return responseDb 
    } catch (error) {
      console.log(error);
      return error
    }
  }
} 