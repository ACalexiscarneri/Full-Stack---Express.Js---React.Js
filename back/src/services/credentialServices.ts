import { userAuthedResponseDto } from "../Dto/userDto";
import { Cred } from "../entities/Credential";
import credRepository from "../repositories/credentialRepository";
import * as bcryptjs from "bcryptjs"

const createCredentialsService = async (username:string,password:string):Promise<Cred>=>{

  const hashedPassword = await bcryptjs.hash(password,10);
   console.log(hashedPassword)
     const newCredential:Cred = await credRepository.create({username,password:hashedPassword});
  console.log(newCredential);
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
