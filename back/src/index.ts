import app from "./server"
import { PORT } from "./config/envs"
import "reflect-metadata"
import { AppDataSource } from "./config/data-source"


AppDataSource.initialize().then(res=>{
    console.log("conexion exitosa")

    app.listen(PORT, ()=> {
        console.log("server on")
    })
})