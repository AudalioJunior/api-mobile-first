import { Squad } from "../../../entity/Squad";

export default interface ICreateSquadUseCase{
  execute(squad: Squad): any;
}