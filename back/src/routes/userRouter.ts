import { Router } from "express";
import {getAllUser, getUserById, register,login} from "../controllers/userController"

const userRouter = Router();
// ruta para obtener todos los usuarios
userRouter.get("/", getAllUser)

// ruta para obtener un usuario especifico
userRouter.get("/:id", getUserById)

// ruta para crear un nuevo usuario
userRouter.post("/register", register)

//ruta para logear un usuario
userRouter.post("/login" , login)

export default userRouter