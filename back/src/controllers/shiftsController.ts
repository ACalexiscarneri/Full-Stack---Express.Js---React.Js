import { Request, Response } from "express"
import {getShiftsService,getShiftByIdService,createShiftService,cancelShiftService} from "../services/shiftService"
import IShift from "../interfaces/IShift"
import { shiftDto } from "../Dto/shiftDto"
import { Shift } from "../entities/shift"

const getAllShifts = async (req:Request , res:Response)=>{
    const shifts:Shift[]= await getShiftsService()
    res.status(201).json(shifts);
  
}

const getShiftById = async (req:Request, res:Response)=>{
    const {id} = req.params
    try{
        const shift:Shift | null = await getShiftByIdService(parseInt(id))
        console.log(shift)
        res.status(201).json(shift);
    }
    catch{
        res.status(500).send("error de servidor")
    }
}
const schedule = async (req:Request, res:Response)=>{
    const {date,time,status,userId} = req.body;
    try{
        const newShift:Shift | null = await createShiftService({date,time,status,userId})
        res.status(201).json(newShift);

    }catch(error){
        res.status(500).send("error de servidor")
        console.error(error)
    }
}

const cancel = async (req:Request, res:Response)=>{
    const {id} = req.params;
    try{
        const shift:Shift | null = await cancelShiftService(parseInt(id))
        res.status(201).json(shift);

    }catch(error){
      console.log(error);
    }
}

export { getAllShifts, getShiftById, schedule,cancel}