import { AppDataSource } from "../config/data-source";
import { Cred } from "../entities/Credential";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential"

const credentials:ICredential[] = [];

let id:number = 1;

const createCredentialsService = async (username:string,password:string):Promise<number>=>{
     const newCredential:Cred = await AppDataSource.getRepository(Cred).create({username,password});
     const result = AppDataSource.getRepository(Cred).save(newCredential);

     const user = await AppDataSource.getRepository(User).findOneBy({
      
     })

     return newCredential.id;
}

const checkUserCredentials = async (username:string,password:string):Promise<number | null>=>{
   const foundUser:Cred | undefined = credentials.find((user)=>{
       user.username === username
   });
  if(foundUser){
    if(foundUser.password === password){
      return foundUser.id;
    }
  }
  return null;   
}


export  {createCredentialsService , checkUserCredentials};
