import { Request, Response } from "express";
import IUser from "../interfaces/IUser"
import {createUserService, getUsersService, getUserByIdService} from "../services/userService";
import {User} from "../entities/User"
import { userAuthedResponseDto, userRespuestaDto } from "../Dto/userDto";
import { loginUserService } from "../services/userService";
import userRepository from "../repositories/userRepository";
import credRepository from "../repositories/credentialRepository";


const getAllUser = async (req:Request, res:Response)=>{
    const users:User[]= await getUsersService()
    res.status(201).json(users);
  
}

const getUserById = async(req:Request, res:Response)=>{
    const user:User | null = await getUserByIdService(parseInt(req.params.id))
    if(user){
        res.status(201).json(user);

    } else{
        return res.status(404).send(" user not found")
    }
}

const register = async(req:Request,res:Response)=>{
    const{ name,email,birthdate,nDni,username,password} = req.body;
    
    try{
       const existingUsernmame = await credRepository.findOne({
        where:{username}
       })
       if(existingUsernmame) return res.status(400).json({message:"El username ya esta el uso"})
        const existingEmail = await userRepository.findOne({
            where:{email}
        })
        if(existingEmail){
         return res.status(400).json({message:"El email ya esta registrado"});
        }
        
        const newUser:userRespuestaDto = await createUserService({ name,email,birthdate,nDni,username,password})
         return res.status(201).json(newUser);

    }catch(error){
    console.error("error al crear usuario:" , error)
    res.status(500).send("error de servidor")
    }
}

const login = async (req:Request, res:Response)=>{
    const {username,password} = req.body;
    if(!username || !password){
    return res.status(400).send("missing required fields")
    }
try{
    const userAuthed:userAuthedResponseDto | null  = await loginUserService(username,password)
    if(userAuthed) return res.status(201).json(userAuthed)
    return res.status(400).send("fallo al logerse")

}catch(error){
     console.error("no esta registrado")
     res.status(500).send("error de servidor")
}

}

export  {getAllUser,getUserById,register,login};