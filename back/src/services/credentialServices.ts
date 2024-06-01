import { userAuthedResponseDto } from "../Dto/userDto";
import { AppDataSource } from "../config/data-source";
import { Cred } from "../entities/Credential";
import ICredential from "../interfaces/ICredential"
import credRepository from "../repositories/credentialRepository";


const createCredentialsService = async (username:string,password:string):Promise<Cred>=>{
     const newCredential:Cred = await credRepository.create({username,password});
      await credRepository.save(newCredential);

     return newCredential;
}


const checkUserCredentials = async (username:string,password:string):Promise< userAuthedResponseDto | null>=>{
   const foundUserCreds: Cred | null = await credRepository.findOne({
    where:{username},
    relations:{user:true}
  })

  if(foundUserCreds){
    if(foundUserCreds.password === password){
      return {
        login:true,
        user:{
          id:foundUserCreds.user.id,
          name:foundUserCreds.user.name,
          email:foundUserCreds.user.email,
          birthdate:foundUserCreds.user.birthdate,
          nDni:foundUserCreds.user.nDni,
      }
    }
    } 
    
  }
  return null;
 
}

export  {createCredentialsService , checkUserCredentials};
