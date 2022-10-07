import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('auth')
export class authEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string
}