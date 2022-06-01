import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from "typeorm"
import { Squad } from "./Squad";
import { TaskGroup } from "./TaskGroup";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    email: string

    @Column()
    password: number

    @OneToMany(() => TaskGroup, taskGroup => taskGroup.user)
    taskGroup: TaskGroup[];

    @ManyToOne(() => Squad, squad => squad.user)
    squad: Squad;
}
