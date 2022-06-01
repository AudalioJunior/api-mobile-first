import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { TaskGroup } from "./TaskGroup";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    name: string;

    @Column()
    finished: boolean;

    @Column({name: "finished_by"})
    finishedBy: string

    @Column({name: "due_date"})
    dueDate: string;

    @ManyToOne(() => TaskGroup, taskgroup => taskgroup.task)
    taskGroup: TaskGroup;
}
