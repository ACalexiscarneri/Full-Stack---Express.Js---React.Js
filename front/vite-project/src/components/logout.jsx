import { useDispatch } from "react-redux";
import { logout } from "../redux/reduce";
import { useNavigate } from "react-router-dom";



const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem('user');
      dispatch(logout());
      navigate('/login');
    };
  
    return <button onClick={handleLogout}>Logout</button>;
  };

  export default LogoutButton;