import { useNavigate } from "react-router-dom";
import "../Styles/Register.css";

function Register() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;

        navigate("/account", { state: { name, email } });
    };

    return (
        <div className="register-wrapper">
            <form className="register-card" onSubmit={handleSubmit}>
                <h2>
                    Create your <br /> PopX account
                </h2>

                <div className="form-group">
                    <label>Full Name <span>*</span></label>
                    <input type="text" name="name" placeholder="Enter your full name" required />
                </div>

                <div className="form-group">
                    <label>Phone number <span>*</span></label>
                    <input type="text" placeholder="Enter your phone number" required />
                </div>

                <div className="form-group">
                    <label>Email address <span>*</span></label>
                    <input type="email" name="email" placeholder="Enter your email address" required />
                </div>

                <div className="form-group">
                    <label>Password <span>*</span></label>
                    <input type="password" placeholder="Enter your password" required autoComplete="off"/>
                </div>

                <div className="form-group">
                    <label>Company name</label>
                    <input type="text" placeholder="Enter your company name" required />
                </div>

                <p className="agency-text">Are you an Agency? <span>*</span></p>

                <div className="radio-group">
                    <label className="radio">
                        <input type="radio" name="agency" />
                        <span className="custom-radio"></span>
                        Yes
                    </label>

                    <label className="radio">
                        <input type="radio" name="agency" />
                        <span className="custom-radio"></span>
                        No
                    </label>
                </div>

                <button className="primary-btn">
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default Register;