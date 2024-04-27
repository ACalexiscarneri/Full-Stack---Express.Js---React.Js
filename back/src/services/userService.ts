import IUser from "../interfaces/IUser"
import {userDto, userRespuestaDto} from "../Dto/userDto"
import { createCredentialsService } from "./credentialServices";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import userRepository from "../repositories/userRepository";



const createUserService = async(userdata:userDto):Promise<userRespuestaDto>=>{
    
   const creds = await createCredentialsService(userdata.username , userdata.password);
   const newUser:User = await userRepository.create(userdata);
   newUser.cred = creds;
   creds.user = newUser;
   
   await userRepository.save(newUser);

   return {
      id:newUser.id,
      name:newUser.name,
      email:newUser.email,
      birthdate: newUser.birthdate,
      nDni: newUser.nDni,
      credentialId: newUser.cred.id
   };
}

const getUsersService = async():Promise<User[]>=>{
   const users = await userRepository.find({
      relations:{
         shifts:true
      }
   });
  return users;
}

const getUserByIdService = async(id:number):Promise<User | null>=>{
   const usersId = await userRepository.findOneBy({id})
      return usersId;
}

export  {createUserService , getUsersService, getUserByIdService}