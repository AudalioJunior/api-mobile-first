import { User } from "../entity/User";

export default interface IUserRepository{
    getAll(): any;
    create(user: User): any;
    update(user: User): any;
    getUser(email: string): any;
}