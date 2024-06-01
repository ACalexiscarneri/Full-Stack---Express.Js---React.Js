import { Router } from "express";
import {getAllUser, getUserById, register,login} from "../controllers/userController"
import {loginSchema,registerSchema} from "../schema/auth.schema"
import validateSchema from "../middleware/validator"


const userRouter = Router();
// ruta para obtener todos los usuarios
userRouter.get("/", getAllUser)

// ruta para obtener un usuario especifico
userRouter.get("/:id", getUserById)

// ruta para crear un nuevo usuario
userRouter.post("/register",validateSchema(registerSchema) , register)

//ruta para logear un usuario
userRouter.post("/login" ,validateSchema(loginSchema), login)

export default userRouter