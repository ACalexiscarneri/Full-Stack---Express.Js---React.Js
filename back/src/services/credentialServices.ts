import ICredential from "../interfaces/ICredential"

const credentials:ICredential[] = [];

let id = 1;

const createCredentialsService = (username:string,password:string)=>{
     const newCredential = {
        id,
        username,
        password,
     }
     if(username)
     credentials.push(newCredential);
     id++
}

