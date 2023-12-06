
import { useState } from "react";
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/Register.css";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Navigate to the root path after successful registration
      navigate('/');

      try {
        //Update profile
        await updateProfile(res.user, {
          displayName
        });
      }
      catch{

      }
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">NewsAPP Register</span>
        
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Display Name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          
          <button>Sign up</button>
          
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
