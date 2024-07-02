import { useContext } from "react";
import { UserContext } from "./UserProvider";
import { Navigate, Outlet } from "react-router-dom";

const ProtecRoute = ()=>{

    const {user} = useContext(UserContext);
    

    if(!user){
        return <Navigate to="/"/>
    } 
    return <Outlet/>
}

export default ProtecRoute;