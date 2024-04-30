import React from "react";
import "../assets/scss/header.scss"
import Logo from "../assets/img/header/logo.png"

const UserHeader = () => {
    const handleHome=()=>{
        window.location='/'
    }
    return (
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <img src={Logo} onClick={()=>handleHome()} className="logo-img" alt="logo"/>
                        <ul className="nav">
                            <li className="scroll-to-section"><a> <em>Hello,</em> Sandun Nishan</a></li>
                            <li className="main-button"><a href="/">Log out</a></li>
                        </ul>        
                    </nav>
                </div>
            </div>
        </div>
    </header>
    );
  };
  
  export default UserHeader;