import { IsMobilePhone, isMobilePhone, Max, Min, min } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('crud')
export class crudEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        type: "bigint"
    })
    @IsMobilePhone()
    @Min(0)
    @Max(20)
    phone: number

    @Column()
    gender: string

    @Column()
    address: string
}