import IUser from "../interfaces/IUser"
import userDto from "../Dto/userDto"

const users:IUser[] = [];

let id:number = 1;
const birthdate = new Date();

const createUserService = async(userdata:userDto):Promise<IUser>=>{
   const newUser:IUser = {
    id,
    name: userdata.name,
    email: userdata.email,
    birthdate: birthdate,
    nDni: userdata.nDni,
    
   }
   users.push(newUser);
   id++;
   return newUser;

}

const getUsersService = async():Promise<IUser[]>=>{
  return users;
}

const getUserByIdService = (id:number)=>{
   const usersId = users.find((user:IUser)=>{
      return user.id === id;
   })
   
   return usersId
}

export  {createUserService , getUsersService, getUserByIdService}