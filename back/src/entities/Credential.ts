import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name:"credential"
})
export class Cred{
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        length:20
    })
    username:string

    @Column({
        length:20
    })
    password:string
}