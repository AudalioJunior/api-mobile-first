import { Request, Response } from "express";
import CreateSquadUseCase from "../useCases/Squad/CreateSquad/CreateSquadUseCase";
import GetSquadUseCase from "../useCases/Squad/GetSquad/GetSquadUseCase";

export class SquadController {
  private createSquadUseCase = new CreateSquadUseCase();
  private getOneSquadUseCase = new GetSquadUseCase();

  async create(req: Request, res: Response){
    try {
      const data = req.body;
      const result = await this.createSquadUseCase.execute(data);
      return res.json({
        squad: result,
        message: "Squad cadastrado com sucesso!"
      })
    } catch (error) {
      return res.status(400).json({erro: "Erro ao cadastrar o squad"})
    }
  }

  async getOne(req: Request, res: Response){
    try {
      const id = Number(req.params.id); 
      const data = this.getOneSquadUseCase.execute(id)
      return res.json({
        squad: data,
        message: "Squad não encontrado"
      })
    } catch (error) {
      console.log(error)
      return error
    }
  }
}