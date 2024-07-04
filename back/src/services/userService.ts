import IUser from "../interfaces/IUser"
import {userDto, userRespuestaDto} from "../Dto/userDto"
import { createCredentialsService } from "./credentialServices";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import userRepository from "../repositories/userRepository";
import {checkUserCredentials} from "./credentialServices"
import {userAuthedResponseDto} from "../Dto/userDto"
import credRepository from "../repositories/credentialRepository";




const createUserService = async(userdata:userDto):Promise<userRespuestaDto>=>{
    
   const creds = await createCredentialsService(userdata.username , userdata.password);
   const newUser:User = await userRepository.create(userdata);
   
   newUser.cred = creds;
   creds.user = newUser;
   
   await userRepository.save(newUser);
   await credRepository.save(creds);

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
   const users:User[] = await userRepository.find({
      
   });

  return users;
}

const getUserByIdService = async(id:number):Promise<User | null>=>{
   const usersId = await userRepository.findOne({
      where:{id},
      relations:["shifts"]

   });
    
      return usersId;

}


 const loginUserService = async(username:string,password:string):Promise<userAuthedResponseDto | null> => {
   const authedUser:userAuthedResponseDto | null = await checkUserCredentials(username,password)
   
   if(authedUser){
      return authedUser;
   }
   return null;
   
 }


export  {createUserService , getUsersService, getUserByIdService,loginUserService}