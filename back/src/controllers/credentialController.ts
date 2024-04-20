import {Request, Response} from "express"
import {createCredentialsService , checkUserCredentials} from "../services/credentialServices"
import ICredential from "../interfaces/ICredential";

const createCredentialsController = async (req:Request, res:Response) => {
    const { username, password } = req.body;

    try {
        const newCredentialId:number = await createCredentialsService(username, password);
        res.status(200).json({ id: newCredentialId, message: "Credential created successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error creating credential." });
    }
};

const checkUser = async (req:Request, res:Response)=>{
    const { username, password } = req.body;
    const credsId = await checkUserCredentials(username,password);
    res.status(200).json(credsId);
}

export {createCredentialsController, checkUser}