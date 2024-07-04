import { useContext } from "react";
import { UserContext } from "./UserProvider";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtecRoute = ()=>{

 //const {user} = useContext(UserContext);
 const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
     
    /*if(!user){
        return <Navigate to="/"/>
    } */
    return <Outlet/>
}

export default ProtecRoute;