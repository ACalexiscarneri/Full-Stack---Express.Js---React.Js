import { Request, Response } from "express";
import IUser from "../interfaces/IUser"
import {createUserService, getUsersService, getUserByIdService} from "../services/userService";

const getAllUser = async (req:Request, res:Response)=>{
    const users:IUser[]= await getUsersService()
    res.status(201).json(users);
  
}

const getUserById = async(req:Request, res:Response)=>{
    const {id} = req.body;
   const user:IUser | undefined = await getUserByIdService(id)
    res.status(201).json(user);
}

const register = async(req:Request,res:Response)=>{
    const{ name,email,birthdate,nDni,username,password} = req.body;
    const newUser:IUser = await createUserService({ name,email,birthdate,nDni,username,password})
    res.status(201).json(newUser);
}

const login = (req:Request, res:Response)=>{

}

export  {getAllUser,getUserById,register,login};