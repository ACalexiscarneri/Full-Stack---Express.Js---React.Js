import  {Router}  from "express";
import userRouter from "./userRouter";
import shiftsRouter from "./shiftsRouter";
import credentialRouter from "./credentialRouter"

const router:Router = Router();

router.use("/users", userRouter)

router.use("/shifts", shiftsRouter)

router.use("/credentials", credentialRouter)

export default router;