import { getRepository } from "typeorm";
import { TaskGroup } from "../../entity/TaskGroup";

import ITaskGroupRepository from "./ITaskGroupRepository";

export default class TaskGroupRepository implements ITaskGroupRepository{

    private ormRepository = getRepository(TaskGroup);

    async create(taskGroup: TaskGroup) {
        try {
            const responseDb = await this.ormRepository.createQueryBuilder("")
        } catch (error) {
            
        }
    }

    update(taskGroup: TaskGroup) {
        throw new Error("Method not implemented.");
    }
    getTasksGroups(userId: number) {
        throw new Error("Method not implemented.");
    }
}