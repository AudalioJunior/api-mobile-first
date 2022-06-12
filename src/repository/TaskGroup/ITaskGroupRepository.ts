import { TaskGroup } from "../../entity/TaskGroup";

export default interface ITaskGroupRepository{
    create(taskGroup: TaskGroup): any;
    update(taskGroup: TaskGroup): any;
    getTasksGroups(userId: number): any;
}