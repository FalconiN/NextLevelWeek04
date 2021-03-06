import { Column, CreateDateColumn, Entity, JoinTable, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("survery")
class Survey {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    desciption: string;

    @CreateDateColumn()
    created_at: Date;

    constructor () {
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { Survey }