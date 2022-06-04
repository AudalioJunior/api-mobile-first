import { User } from "../../../entity/User";

export default interface ICreateUserUseCase{
    create(user: User): any
}