import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name:"shifts"
})
export class Shift{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    date:Date

    @Column()
    time: Date

    @Column()
    status:boolean

    @ManyToOne(()=> User , (user)=> user.id)
    user : User
    
}