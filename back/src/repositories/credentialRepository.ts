import { AppDataSource } from "../config/data-source";
import { Cred } from "../entities/Credential";

const credRepository = AppDataSource.getRepository(Cred)

export default credRepository;