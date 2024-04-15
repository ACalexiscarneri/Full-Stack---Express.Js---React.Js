import app from "./server"
import { PORT } from "./config/envs"
import "reflect-metadata"

app.listen(PORT, ()=> {
    console.log("server on")
})