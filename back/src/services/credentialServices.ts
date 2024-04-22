import { AppDataSource } from "../config/data-source";
import { Cred } from "../entities/Credential";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential"

const credentials:ICredential[] = [];

let id:number = 1;

const createCredentialsService = async (username:string,password:string):Promise<Cred>=>{
     const newCredential:Cred = await AppDataSource.getRepository(Cred).create({username,password});
     const result = AppDataSource.getRepository(Cred).save(newCredential);

     return newCredential;
}

const checkUserCredentials = async (username:string,password:string):Promise<number | null>=>{
   const foundUserCreds: Cred | null = await AppDataSource.getRepository(Cred).findOne({
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
