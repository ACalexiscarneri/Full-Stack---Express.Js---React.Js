import { AppDataSource } from "../config/data-source";
import { Cred } from "../entities/Credential";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential"
import credRepository from "../repositories/credentialRepository";


const createCredentialsService = async (username:string,password:string):Promise<Cred>=>{
     const newCredential:Cred = await credRepository.create({username,password});
      await credRepository.save(newCredential);

     return newCredential;
}

const checkUserCredentials = async (username:string,password:string):Promise<number | null>=>{
   const foundUserCreds: Cred | null = await credRepository.findOne({
    where:{username}
  })
  if(foundUserCreds){
    
    if(foundUserCreds.password === password){
      return foundUserCreds.user.id;
    }
  }
  return null;   
}


export  {createCredentialsService , checkUserCredentials};
