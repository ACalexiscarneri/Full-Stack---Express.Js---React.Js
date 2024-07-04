interface userAuthedResponseDto{
    login:boolean,
    user:{
        id:number,
        name:string,
        email:string,
        birthdate: string,
        nDni: number, 
    }
}

interface userDto{
    name:string,
    email:string,
    birthdate: string,
    nDni: number,
    username:string,
    password:string
}

interface userRespuestaDto{
    id:number,
    name:string,
    email:string,
    birthdate: string,
    nDni: number,
    credentialId: number
}

export  {userDto , userRespuestaDto,userAuthedResponseDto}