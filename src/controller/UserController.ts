import { Request, Response } from "express";
import { resolve } from "url";
import CreateUserUseCase from "../useCases/User/CreateUser/CreateUserUseCase";
import GetAllUsersUseCase from "../useCases/User/GetAllUsers/GetAllUsersUseCase";
import UpdateUserUseCase from "../useCases/User/UpdateUser/UpdateUserUseCase";

export class UserController {
  private createUserUserCase = new CreateUserUseCase();
  private getAllUserUseCase = new GetAllUsersUseCase();
  private updateUserUseCase = new UpdateUserUseCase();

  async getAll(req: Request, res: Response) {
    try {
      const result = await this.getAllUserUseCase.execute();
      return res.json({
        users: result,
        message: "Busca realizada com sucesso!"
      })
    } catch (error) {
      return res.status(404).json({ error: "Error ao procurar o usuário!" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const result = await this.createUserUserCase.execute(data);
      return res.json({
        user: result,
        message: "Usuário cadastrado com sucesso!"
      })
    } catch (error) {
      return res.status(400).json({ error: "Error ao cadastrar o usuário!" });
    }
  }

  async update(req: Request, res: Response){
    try {
      const data = req.body;
      const result = await this.updateUserUseCase.update(data);
      return res.json({
        user: result,
        message: "Usuário atualizado com sucesso!"
      })
    } catch (error) {
      return res.status(400).json({error: "Error ao atualizar o usuário!"});
    }
  }

  async getOne(req: Request, res: Response){
    try {
      
    } catch (error) {
      
    }
  }
}