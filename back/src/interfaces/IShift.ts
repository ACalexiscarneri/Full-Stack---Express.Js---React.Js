import { status } from "../Dto/shiftDto";

interface IShift {
    id: number,
    date:Date,
    time:Date,
    status:status,
    userId:number,
}

export default IShift;