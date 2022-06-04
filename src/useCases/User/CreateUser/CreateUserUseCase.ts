import { User } from "../../../entity/User";
import ICreateUserUseCase from "./ICreateUserUseCase";

export default class CreateUserUseCase implements ICreateUserUseCase{
    create(user: User) {
        throw new Error("Method not implemented.");
    }
}