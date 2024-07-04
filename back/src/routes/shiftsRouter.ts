import {Router} from "express"
import { getAllShifts, getShiftById,schedule,cancel} from "../controllers/shiftsController";
import validateSchema from "../middleware/validator";
import {shiftsSchema} from "../schema/auth.schema"

const shiftsRouter = Router();

// ruta para obtner todos los turnos
shiftsRouter.get("/", getAllShifts)

// ruta para obtener un detalle especifico del turn.
shiftsRouter.get("/:id", getShiftById)

// ruta para crear un nuevo turno.
shiftsRouter.post("/schedule",validateSchema(shiftsSchema) ,schedule) 

shiftsRouter.put("/:id" , cancel)

export default shiftsRouter;

