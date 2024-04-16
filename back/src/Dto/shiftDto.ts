interface shiftDto{
        date:Date,
        time:Date,
        status:status,
        userId:number,
}

enum status{
  ACTIVO,
  CANCELADO,
}

export {shiftDto, status}