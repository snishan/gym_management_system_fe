import React from "react";
import "../assets/scss/header.scss"
import Logo from "../assets/img/header/logo.png"

const Header = () => {
    return (
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <img src={Logo} className="logo-img" alt="logo"/>
                        {/* <a href="index.html" className="logo">Training<em> Studio</em></a> */}
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                            <li className="scroll-to-section"><a href="#features">Programs</a></li>
                            <li className="scroll-to-section"><a href="#our-classes">Our Classes</a></li>
                            <li className="scroll-to-section"><a href="#trainers">Trainers</a></li>
                            {/* <li className="scroll-to-section"><a href="#contact-us">Contact</a></li>  */}
                            <li className="main-button"><a href="/signup">Sign Up</a></li>
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    );
  };
  
  export default Header;