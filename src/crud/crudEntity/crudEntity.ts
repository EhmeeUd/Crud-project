import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('crud')
export class crudEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        default: ""
    })
    phone: number

    @Column()
    gender: string

    @Column()
    address: string
}