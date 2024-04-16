import {shiftDto,status} from "../Dto/shiftDto";
import IShift from "../interfaces/IShift";

const shifts:IShift[] = [];

let id:number = 1;

const getShiftsService = async():Promise<IShift[]>=>{
   return shifts;
}

const getShiftByIdService = async(id:number):Promise<IShift | undefined>=>{
   const shiftId = shifts.find((shift:IShift)=>shift.id === id)
   
   return shiftId;

}


const createShiftService = async(appdata:shiftDto):Promise<IShift | undefined>=>{
    if(appdata.userId){
        const newshift:IShift = {
            id,
            date: appdata.date,
            time: appdata.time,
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
    const shiftId = shifts.find((shift:IShift)=>shift.id === id)
    if(shiftId){
        status.CANCELADO;
    }
}

export {getShiftsService,getShiftByIdService,createShiftService,cancelShiftService}
   