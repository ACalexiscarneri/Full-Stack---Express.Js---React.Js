import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,ManyToOne, OneToMany} from "typeorm"
import { Cred } from "./Credential"
import { Shift } from "./shift"


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

    @Column("date")
    birthdate: string

    @Column("integer")
    nDni: number

   @OneToOne(()=> Cred , (cred) => cred.user)
   @JoinColumn()
    cred : Cred;

    @OneToMany(()=> Shift , (shift)=> shift.user)
    shifts : Shift[];

}

