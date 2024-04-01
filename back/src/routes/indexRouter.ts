import  {Router}  from "express";
const router = Router();
import userRouter from "./userRouter";
import shiftsRouter from "./shiftsRouter";

router.use("/users", userRouter)

router.use("/shifts", shiftsRouter)


export default router;