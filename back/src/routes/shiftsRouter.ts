import {Router} from "express"
import { getAllShifts, getShiftById,schedule,cancel} from "../controllers/shiftsController";

const shiftsRouter = Router();

// ruta para obtner todos los turnos
shiftsRouter.get("/", getAllShifts)

// ruta para obtener un detalle especifico del turn.
shiftsRouter.get("/shift", getShiftById)

// ruta para crear un nuevo turno.
shiftsRouter.post("/schedule", schedule)

shiftsRouter.put("/cancel" , cancel)

export default shiftsRouter;

