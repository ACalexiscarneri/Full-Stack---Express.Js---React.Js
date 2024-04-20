import { DataSource } from "typeorm"
import { User } from "../entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "SQL25/01/02",
    database: "project_typeorm",
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
})