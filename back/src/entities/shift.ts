import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { TimeLike } from "fs";

@Entity({
    name:"shifts"
})
export class Shift{
    @PrimaryGeneratedColumn()
    id:number

    @Column("date")
    date:string

    @Column({ type: 'time', nullable: true })
    time: string

    @Column()
    status:status

    @ManyToOne(()=> User , (user)=> user.shifts)
    user : User
    
}


enum status{
    ACTIVO = "active",
    CANCELADO = "cancel"
  }

  export default status