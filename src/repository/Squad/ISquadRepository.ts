import { Squad } from "../../entity/Squad";

export default interface ISquadRepository {
  create(squad: Squad): any;
  getOne(id: number): any;
}