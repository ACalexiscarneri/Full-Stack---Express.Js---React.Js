import  express from "express";
import router from "./routes/indexRouter";
import cors from "express";
import morgan from "express"
const app = express();

app.use(morgan())
app.use(cors())
app.use(express.json());
app.use(router);

export default app;