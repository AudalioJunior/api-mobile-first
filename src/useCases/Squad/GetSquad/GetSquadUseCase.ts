import SquadRepository from "../../../repository/Squad/SquadRepository";
import IGetSquadUseCase from "./IGetSquadUseCase";

export default class GetSquadUseCase implements IGetSquadUseCase{
  private squadRepository = new SquadRepository();

  async execute(id: number) {
    try {
      const response = await this.squadRepository.getOne(id);
      return response
    } catch (error) {
      console.log(error)
      return error
    }
  }
}