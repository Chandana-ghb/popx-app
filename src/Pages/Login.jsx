import { useNavigate } from "react-router-dom";
import "../Styles/Login.css"

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>
          Signin to your <br /> PopX account
        </h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div className="login-form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
          />
        </div>

        <div className="login-form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
          />
        </div>

        <button className="login-btn" onClick={()=>navigate("/account")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;