import { Request, Response } from "express";

const getAllUser =  (req:Request, res:Response)=>{
    res.send("todos los usuarios ok");
}

const idUser = (req:Request, res:Response)=>{
    
}

export  {getAllUser,idUser};