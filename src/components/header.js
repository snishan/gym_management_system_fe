import React ,{useEffect,useState} from "react";
import "../assets/scss/header.scss"
import Logo from "../assets/img/header/logo.png"
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [isLogin, seIsLogin] = useState(false);
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [url, setUrl] = useState('');
    const loginStatus= localStorage.getItem('userLogin')

    useEffect(() => {
        if (role) {
            switch (role) {
                case 'ADMIN':
                    setUrl('/admin')
                    break;
                case "MEMBER":
                    setUrl('/member')
                    break;
                case "TRAINER":
                    setUrl('/trainer')
                    break;
                case "MANAGER":
                    setUrl('/stockManager')
                    break;
                default:
                    break;
            }
        }
    }, [role])
    

    useEffect(() => {
        if (loginStatus !==null) {
            var myObj = JSON.parse(loginStatus);
            let name = myObj.name.split(/\s+/);
            setName(name[0])
            setRole(myObj.userRole)
            seIsLogin(true)
           }else{
            seIsLogin(false)
            setName('')
            setRole('')
           }
    }, []);

    useEffect(() => {
        if (loginStatus !==null) {
         var myObj = JSON.parse(loginStatus);
         let name = myObj.name.split(/\s+/);
         setName(name[0])
         seIsLogin(true)
         setRole(myObj.userRole)
        }else{
         seIsLogin(false)
         setName('')
        }
       }, [loginStatus])

       const logout=()=>{
        localStorage.removeItem('userLogin')
        navigate('/')
        window.location.reload();
       }
       
    return (
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row main-header">
                <div className="col-12">
                    <nav className="main-nav">
                        <img src={Logo} className="logo-img" alt="logo"/>
                        {/* <a href="index.html" className="logo">Training<em> Studio</em></a> */}
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                            <li className="scroll-to-section"><a href="#features">Programs</a></li>
                            <li className="scroll-to-section"><a href="#our-classes">Our Classes</a></li>
                            <li className="scroll-to-section"><a href="#Products">Products</a></li> 
                            <li className="scroll-to-section"><a href="#trainers">Trainers</a></li>
                            {isLogin?<li className="main-button"><a href={url}>My Portal</a></li>:<li className="main-button"><a href="/signup">Sign Up</a></li>}
                            
                        </ul>   
                        {isLogin? <li>{name}<Icon className='logout-icon mx-2' onClick={()=>logout()} icon="mdi:logout" /></li> :""}     
                    </nav>
                </div>
            </div>
        </div>
    </header>
    );
  };
  
  export default Header;