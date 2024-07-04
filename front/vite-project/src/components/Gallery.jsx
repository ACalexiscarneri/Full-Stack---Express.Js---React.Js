import foto from "../assets/barber.jpg"
import barber1 from "../assets/barber1.jpg"
import barber2 from "../assets/barber2.jpg"
const Gallery = () => {

    return (

        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <img alt="gallery" className="w-full object-cover h-full object-center  absolute inset-0" src={foto}/>
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-red-600 font-medium title-font mb-2"></h2>
         
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More</a>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" className="w-full object-cover h-full object-center absolute inset-0" src={barber1}/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-red-600 font-medium title-font mb-2">Actividades</h2>
              <p className="leading-relaxed"></p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More</a>
            </div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" className="w-full object-cover h-full object-center  absolute inset-0" src={barber2}/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-red-600 font-medium title-font mb-2">Cursos</h2>
              <p className="leading-relaxed"></p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}


export default Gallery;