import  {Router}  from "express";
const router:Router = Router();

import userRouter from "./userRouter";
import shiftsRouter from "./shiftsRouter";
import credentialRouter from "./credentialRouter"

router.use("/users", userRouter)

router.use("/shifts", shiftsRouter)

router.use("/credentials", credentialRouter)

export default router;