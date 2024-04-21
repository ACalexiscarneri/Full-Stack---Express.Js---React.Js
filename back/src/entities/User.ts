import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Cred } from "./Credential"



@Entity({
    name:"users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length:100
    })
    name: string

    @Column()
    email: string

    @Column()
    birthdate: Date

    @Column("integer")
    nDni: number

    @OneToOne(()=> Cred)
    @JoinColumn()
    Cred : Cred

}

