import "./Header.scss"
import logo from '../../assets/logo/BrainFlix-logo.svg'
import upload from '../../assets/icons/upload.svg'
import profile from '../../assets/images/Mohan-muruge.jpg'
import {Link} from "react-router-dom";


function Header () {
    return (
        <>
            <div className="header">
                <Link to="/" className="header__logo">
                    <img src={logo} className="header__logo-image" alt="BrainFlix" />
                </Link>
                <div className="header__search">
                    <input type="search" className="header__search-box" placeholder="Search" />
                    <img src={profile} className="header__profile-mobile" alt="profile"/>
                </div>
                <Link to="/upload" className="header__upload"> 
                    <img src={upload} alt="upload"/> 
                    <p className="header__upload-text">UPLOAD</p>
                </Link>
                <div className="header__profile" >
                    <img src={profile} className="header__profile-tablet" alt="profile"/>
                </div>
            </div>
        </>
    );
};

export default Header;