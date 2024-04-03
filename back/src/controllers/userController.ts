import { Request, Response } from "express";
import IUser from "../interfaces/IUser"
import createUserService from "../services/userService";

const getAllUser = async (req:Request, res:Response)=>{
  
}

const getUserById = (req:Request, res:Response)=>{
    
}

const register = async(req:Request,res:Response)=>{
    const{ name,email,birthdate,nDni} = req.body;
    const newUser:IUser = await createUserService({ name,email,birthdate,nDni})
    res.status(201).json(newUser);
}

const login = (req:Request, res:Response)=>{

}

export  {getAllUser,getUserById,register,login};