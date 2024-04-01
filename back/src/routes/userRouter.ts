import { Router } from "express";
import {getAllUser, idUser} from "../controllers/userController"

const userRouter = Router();
// ruta para obtener todos los usuarios
userRouter.get("/", getAllUser)

// ruta para obtener un usuario especifico
userRouter.get("/", idUser)
// ruta para crear un nuevo usuario
userRouter.post("/",()=>{

})


export default userRouter