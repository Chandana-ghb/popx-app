import "../Styles/Account.css";
import { FaCamera } from "react-icons/fa";
import profileImg from "../assets/Profile.png";
import { useLocation } from "react-router-dom";

function Account() {
    const location = useLocation();
    const user = location.state;

    return (
        <>
            <h2 className="title">Account Settings</h2>
            <div className="account-container">

                <div className="profile-section">
                    <div className="image-wrapper">
                        <img
                            src={profileImg}
                            alt="profile"
                            className="profile-img"
                        />
                        <div className="camera-icon">
                            <FaCamera />
                        </div>
                    </div>

                    <div>
                        <h4 className="name">{user?.name || "Marry Doe"}</h4>
                        <p className="email">{user?.email || "Marry@gmail.com"}</p>
                    </div>
                </div>

                <p className="description">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                    Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
                <p className="dots"></p>
            </div>
        </>
    );
}

export default Account;