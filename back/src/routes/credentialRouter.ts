import {Router} from "express";
import {createCredentialsController, checkUser} from "../controllers/credentialController"

const credentialRouter = Router();

// ruta para crear nuevas credenciales
credentialRouter.post("/create", createCredentialsController)

credentialRouter.get("/:id" , checkUser)

export default credentialRouter;