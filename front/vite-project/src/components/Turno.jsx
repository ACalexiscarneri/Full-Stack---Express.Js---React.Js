


const Turno = ({date,time,status,name,id})=>{
 
    return( 
      <section className="text-gray-600 body-font">
        <div className="container  mx-auto">
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <tbody>
          <tr>
          <td className="px-4 py-3">{id}</td>
            <td className="px-4 py-3">{name}</td>
            <td className="px-4 py-3">{date}</td>
            <td className="px-4 py-3">{time}</td>
            <td className="px-4 py-3 text-lg text-gray-900">{status}</td>
            <td className="w-10 text-center">
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
</section>
    )
}


export default Turno;