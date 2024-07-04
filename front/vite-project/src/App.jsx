import './App.css'
import Home from './views/home';
import Misturnos from "./views/misTurnos";
import Navbar from './components/Navbar';
import {Routes, Route, useLocation} from "react-router-dom"
import { UserProvider } from './components/UserProvider';
import About from './views/about';
import Inicio from './views/inicio';
import Contact from './views/contact';
import ProtecRoute from './components/ProtecRoute';



function App() {

  
  const location = useLocation();

  return (
    <>
  {location.pathname ===  "/"  ? null : <Navbar/>}


   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route element={<ProtecRoute/>}>
    <Route path="/turnos" element={<Misturnos/>}/>
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<h1>Error 404 , page no found</h1>}/>
    </Route>
   </Routes>

    </>
  
  )
  
}

export default App;
