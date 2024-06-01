import { Column, Entity, PrimaryGeneratedColumn,OneToOne, JoinColumn} from "typeorm";
import { User } from "./User";


@Entity({
    name:"credentials"
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

    @OneToOne(()=> User , (user) => user.cred)
    @JoinColumn()
    user : User;
    
}