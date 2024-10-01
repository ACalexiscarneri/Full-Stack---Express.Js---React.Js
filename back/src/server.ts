import  express from "express";
import router from "./routes/indexRouter";
import cors from "cors";

import morgan from "express"
const app = express();

app.use(morgan())
app.use(cors())
app.use(express.json({limit: "20kb"}));
app.use(router);

export default app;