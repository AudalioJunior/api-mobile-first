import { getRepository } from "typeorm";
import { User } from "../entity/User";
import IUserRepository from "./IUserRepository";

export default class UserRepository implements IUserRepository{

    private ormRepository = getRepository(User);

    async create(user: User) {
        try {
            const responseDB = await this.ormRepository.save(user);
            return responseDB
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async update(user: User) {
        try {
            const responseDB = await this.ormRepository.update(user.id, user);
            return responseDB
        } catch (error) {
            console.log(error)
            return error
        }
    }
}