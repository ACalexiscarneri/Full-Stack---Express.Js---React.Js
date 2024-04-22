import IUser from "../interfaces/IUser"
import userDto from "../Dto/userDto"
import { createCredentialsService } from "./credentialServices";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";


const users:IUser[] = [];

let id:number = 1;


const createUserService = async(userdata:userDto):Promise<User>=>{
   const newUser:User = await AppDataSource.getRepository(User).create(userdata);
   
   const creds = await createCredentialsService(userdata.username , userdata.password);
   newUser.cred = creds;
   creds.user = newUser;
   const result = await AppDataSource.getRepository(User).save(newUser);
   
   return newUser;
}

const getUsersService = async():Promise<User[]>=>{
   const users = await AppDataSource.getRepository(User).find();
  return users;
}

const getUserByIdService = async(id:number):Promise<User | null>=>{
   const usersId = await AppDataSource.getRepository(User).findOneBy({id})
      return usersId;
}

export  {createUserService , getUsersService, getUserByIdService}