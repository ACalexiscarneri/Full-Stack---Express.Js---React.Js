import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name:"shifts"
})
export class Shift{
    @PrimaryGeneratedColumn()
    id:number

    @Column("date")
    date:Date

    @Column("date")
    time: Date

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