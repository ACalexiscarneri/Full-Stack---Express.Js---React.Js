

enum status{
  ACTIVO = "Active",
  CANCELADO = "Cancel"
}


interface shiftDto{
        date:Date,
        time:Date,
        status:status,
        userId:number,
}




export {shiftDto, status}