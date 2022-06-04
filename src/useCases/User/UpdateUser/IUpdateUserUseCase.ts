import { User } from "../../../entity/User";

export default interface IUpdateUserUseCase{
    update(user: User): any
}