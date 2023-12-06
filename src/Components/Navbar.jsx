import "../Styles/App.css";
import "../Styles/Navbar.css";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../AuthContext'
import { useContext } from "react";

function Navbar() 
{
  
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser);
  return (
    
    <>
        <nav className="NavbarContainer">
            
            <img src={logo} alt="Logo" id="logo" />

            <div className="categories">
                <Link to={"/"}>Home</Link>
                <Link to={"/sports"}>Sports</Link>
                <Link to={"/entertainment"}>Entertainment</Link>
                <Link to={"/science"}>Science</Link>
                <Link to={"/business"}>Business</Link>
                <Link to={"/technology"}>Technology</Link>
            </div>

            <div className="buttons">
                
              <button onClick={()=>signOut(auth)}>{currentUser.displayName}, Log Out</button>
            </div>
        </nav>
    </>
  );
}

export default Navbar