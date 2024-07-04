

enum status{
  ACTIVO = "Active",
  CANCELADO = "Cancel"
}


interface shiftDto{
        date:string
        time:string,
        status:status,
        userId:number,
}




export {shiftDto, status}