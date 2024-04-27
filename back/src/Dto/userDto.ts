

interface userDto{
    name:string,
    email:string,
    birthdate: Date,
    nDni: number,
    username:string,
    password:string
}

interface userRespuestaDto{
    id:number,
    name:string,
    email:string,
    birthdate: Date,
    nDni: number,
    credentialId: number
}

export  {userDto , userRespuestaDto}