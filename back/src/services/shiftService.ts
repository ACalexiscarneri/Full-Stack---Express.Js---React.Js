import {shiftDto} from "../Dto/shiftDto";
import IShift from "../interfaces/IShift";
import status from "../entities/shift";


const shifts:IShift[] = [];

let id:number = 1;

const getShiftsService = async():Promise<IShift[]>=>{
   return shifts;
}

const getShiftByIdService = async(id:number):Promise<IShift | undefined>=>{
   const shiftId = shifts.find((shift:IShift)=>shift.id === id)
   
   return shiftId;

}

const date = new Date();
const time = new Date()

const createShiftService = async(appdata:shiftDto):Promise<IShift | undefined>=>{
    if(appdata.userId){
        const newshift:IShift = {
            id,
            date: date,
            time: time,
            status: status.ACTIVO,
            userId: appdata.userId
            
           }
           shifts.push(newshift);
           id++;
           return newshift;
    }
    return undefined;
}

const cancelShiftService = async(id:number)=>{
    const shiftId: shiftDto | undefined = shifts.find((shift:IShift)=>shift.id === id)
    if(shiftId){
        shiftId.status = status.CANCELADO;
    }
    
    return shiftId;
}

export {getShiftsService,getShiftByIdService,createShiftService,cancelShiftService}
   