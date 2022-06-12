import { getRepository } from "typeorm";
import { Squad } from "../../entity/Squad";
import ISquadRepository from "./ISquadRepository";

export default class SquadRepository implements ISquadRepository {
  private ormRepository = getRepository(Squad);

  async create(squad: Squad) {
    try {
      const responseDB = await this.ormRepository.save(squad);
      return responseDB
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async getOne(id: number) {
    try {
      const responseDB = await this.ormRepository.createQueryBuilder("squad")
      .leftJoinAndSelect("squad.user", "users")
      .getMany()

      return responseDB
    } catch (error) {
      console.log(error)
      return error
    }
  }
}