

enum status{
  ACTIVO = "active",
  CANCELADO = "cancel"
}


interface shiftDto{
        date:Date,
        time:Date,
        status:status,
        userId:number,
}




export {shiftDto, status}