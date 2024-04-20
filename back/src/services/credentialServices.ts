import ICredential from "../interfaces/ICredential"

const credentials:ICredential[] = [];

let id:number = 1;

const createCredentialsService = async (username:string,password:string):Promise<number>=>{
     const newCredential:ICredential = {
        id,
        username:username,
        password:password,
     }
     
     credentials.push(newCredential);
     id++
     return newCredential.id;
}

const checkUserCredentials = async (username:string,password:string):Promise<number | null>=>{
   const foundUser:ICredential | undefined = credentials.find((user)=>{
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
