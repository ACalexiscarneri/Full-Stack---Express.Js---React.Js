import {shiftDto} from "../Dto/shiftDto";
import IShift from "../interfaces/IShift";
import status, { Shift } from "../entities/shift";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { getUserByIdService} from "./userService";
import shiftRepository from "../repositories/shiftRepository";


const getShiftsService = async():Promise<Shift[]>=>{
    const shifts:Shift[] = await shiftRepository.find({
        relations:{user:true
            
        }
    });

   return shifts;
}

const getShiftByIdService = async(id:number):Promise<Shift | null>=>{
   const shiftId = await shiftRepository.findOneBy({id})
   
   return shiftId;

}


const createShiftService = async(appdata:shiftDto):Promise<Shift | null>=>{
    const foundUser:User | null  = await getUserByIdService(appdata.userId) 
    if(foundUser){
        const newShift:Shift = await shiftRepository.create({
             date: appdata.date,
             time: appdata.time,
             status: status.ACTIVO,
             user: foundUser,
        })
        
        await shiftRepository.save(newShift);
        return newShift;
    }
    return null;
}

const cancelShiftService = async(id:number)=>{
    const shiftId: Shift | null = await getShiftByIdService(id)
    if(shiftId){
        shiftId.status = status.CANCELADO;
        return shiftId;
    } 
    return null;
}

export {getShiftsService,getShiftByIdService,createShiftService,cancelShiftService}
   