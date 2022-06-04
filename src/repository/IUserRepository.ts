import { User } from "../entity/User";

export default interface IUserRepository{
    create(user: User): any;
    update(user: User): any;
}