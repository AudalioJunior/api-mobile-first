import { Squad } from "../../../entity/Squad";
import SquadRepository from "../../../repository/Squad/SquadRepository";
import ICreateSquadUseCase from "./ICreateSquadUseCase";

export default class CreateSquadUseCase implements ICreateSquadUseCase{
  private squadRepository = new SquadRepository();

  async execute(squad: Squad) {
    try {
      const response = await this.squadRepository.create(squad);
      return response
    } catch (error) {
      console.log(error)
      return error
    }
  }
}