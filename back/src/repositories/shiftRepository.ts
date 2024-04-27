import { AppDataSource } from "../config/data-source";
import { Shift } from "../entities/shift";

const shiftRepository = AppDataSource.getRepository(Shift)


export default shiftRepository;