import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import WebImage from "../WebImage/WebImage";


const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li>
            <Link to='/' >
              <WebImage />
            </Link>
        </li>
        <li>
          <button onClick={() => navigate('/')}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate('/events')}>Events</button>
        </li>
        <li>
          <button onClick={() => navigate('/leaders')}>Leaders</button>
        </li>
        <li>
          <button onClick={() => navigate('/notes')}>Notes</button>
        </li>
        <li>
        {user ? (
            <button onClick={() => navigate("/roster")}>Roster</button>
          ) : (
            <button onClick={() => navigate('/register')}>Leader Register</button>
          )}
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Leader Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
