import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm"
import { Task } from "./Task";
import { User } from "./User";

@Entity()
export class TaskGroup {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    name: string

    @Column({ name: "code_shared" })
    codeShared: string

    @ManyToOne(() => User, user => user.taskGroup)
    user: User;

    @OneToMany(() => Task, task => task.taskGroup)
    task: Task[];
}
