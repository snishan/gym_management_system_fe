import React, { useEffect, useState } from "react";
import "../assets/scss/header.scss"
import Logo from "../assets/img/header/logo.png"
import { useNavigate } from "react-router-dom";

const UserHeader = () => {
    const navigate = useNavigate();
    const [isLogin, seIsLogin] = useState(false);
    const [name, setName] = useState('');
    const loginStatus = localStorage.getItem('userLogin')

    useEffect(() => {
        if (loginStatus !== null) {
            var myObj = JSON.parse(loginStatus);
            let name = myObj.name.split(/\s+/);
            setName(name[0] + " "+name[1])
            seIsLogin(true)
        } else {
            seIsLogin(false)
            setName('')
        }
    }, []);

    useEffect(() => {
        if (loginStatus !== null) {
            var myObj = JSON.parse(loginStatus);
            let name = myObj.name.split(/\s+/);
            setName(name[0] + " "+name[1])
            seIsLogin(true)
        } else {
            seIsLogin(false)
            setName('')
        }
    }, [loginStatus])

    const handleHome = () => {
        navigate('/')
    }

    const handleLogout=()=>{
        localStorage.removeItem('userLogin')
        window.location.reload();
    }
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <img src={Logo} onClick={() => handleHome()} className="logo-img" alt="logo" />
                            <ul className="nav">
                                <li className="scroll-to-section"><a> <em>Hello,</em> {name}</a></li>
                                <li className="main-button"><a onClick={()=>handleLogout()} href="/">Log out</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default UserHeader;