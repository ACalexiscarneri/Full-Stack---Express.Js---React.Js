import styles from "./Turno.module.css";


const Turno = ({date,time,status,name,id})=>{
 
    return( 
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">id</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Nombre</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Date</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Time</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">status</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td class="px-4 py-3">{id}</td>
            <td class="px-4 py-3">{name}</td>
            <td class="px-4 py-3">{date}</td>
            <td class="px-4 py-3">{time}</td>
            <td class="px-4 py-3 text-lg text-gray-900">{status}</td>
            <td class="w-10 text-center">
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