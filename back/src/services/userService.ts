import IUser from "../interfaces/IUser"
import userDto from "../Dto/userDto"
import { createCredentialsService } from "./credentialServices";


const users:IUser[] = [];

let id:number = 1;
const birthdate = new Date();

const createUserService = async(userdata:userDto):Promise<IUser>=>{
   const creds:number = await createCredentialsService(userdata.username,userdata.password)
   const newUser:IUser = {
    id,
    name: userdata.name,
    email: userdata.email,
    birthdate: birthdate,
    nDni: userdata.nDni,
    credentialsId: creds,
   }
   users.push(newUser);
   id++;
   return newUser;

}

const getUsersService = async():Promise<IUser[]>=>{
  return users;
}

const getUserByIdService = async(id:number):Promise<IUser | undefined>=>{
   const usersId = users.find((user:IUser)=>user.id === id)
      return usersId;
}

export  {createUserService , getUsersService, getUserByIdService}