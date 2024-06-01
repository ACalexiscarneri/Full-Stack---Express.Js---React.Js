import {Router} from "express";
import {createCredentialsController, checkUser} from "../controllers/credentialController"

const credentialRouter = Router();

// ruta para crear nuevas credenciales
credentialRouter.post("/create", createCredentialsController)

credentialRouter.get("/:creds" , checkUser)

export default credentialRouter;