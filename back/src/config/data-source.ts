import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Cred } from "../entities/Credential"
import { Shift } from "../entities/shift"
import {DB_HOST,DB_PORT,DB_USERNAME,DB_PASSWORD,DB_NAME} from "./envs"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: "postgres",
    password: DB_PASSWORD,
    database: "project_typeorm",
    synchronize: true,
    logging: false,
    entities: [User,Cred,Shift],
    subscribers: [],
    migrations: [],
})