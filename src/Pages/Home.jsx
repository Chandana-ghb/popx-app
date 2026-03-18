import { useNavigate } from "react-router-dom";
import "../Styles/Home.css"

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

      <button className="primary-btn" onClick={() => navigate("/register")}>
        Create Account
      </button>

      <button className="secondary-btn" onClick={() => navigate("/login")}>
        Already Registered? Login
      </button>
    </div>
  );
}

export default Home;