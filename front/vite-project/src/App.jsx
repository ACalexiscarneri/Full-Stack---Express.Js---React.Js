import './App.css'
import Home from './views/home';
import Misturnos from "./views/misTurnos";
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import {BrowserRouter , Routes, Route} from "react-router-dom"
import { UserProvider } from './components/protectedRoute';
import Login from './components/login';


function App() {

  return (
    <BrowserRouter>
    
<UserProvider>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/turnos" element={<Misturnos>
      <Navbar/>
    </Misturnos>}/>
      <Route path='/inicio' element={<h1>inicio</h1>}/>
      <Route path='/about' element={<h1>about</h1>}/>
   </Routes>
</UserProvider>

    </BrowserRouter>
  
  )
  
}

export default App;
