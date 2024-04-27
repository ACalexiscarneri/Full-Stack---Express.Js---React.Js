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
    const {id} = req.body;
    const shift:Shift | null = await getShiftByIdService(id)
    res.status(201).json(shift);
}

const schedule = async (req:Request, res:Response)=>{
    const {date,time,status,userId} = req.body;
    const newShift:Shift | null = await createShiftService({date,time,status,userId})
    res.status(201).json(newShift);
}

const cancel = async (req:Request, res:Response)=>{
    const {id} = req.body;
    const shift:Shift | null = await cancelShiftService(id)
    res.status(201).json(shift);
}

export { getAllShifts, getShiftById, schedule,cancel}