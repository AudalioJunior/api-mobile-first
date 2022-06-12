import UserRepository from "../../../repository/UserRepository";
import IGetAllUsersUseCase from "./IGetAllUsersUseCase";

export default class implements IGetAllUsersUseCase{

    private userRepository = new UserRepository();

    async execute() {
        try {
            const responseUsers = await this.userRepository.getAll();
            return responseUsers
        } catch (error) {
            console.log(error)
            return error
        }
    }
}