import { User } from "../../../entity/User";

export default interface ICreateUserUseCase{
    execute(user: User): any
}