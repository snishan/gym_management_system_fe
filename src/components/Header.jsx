import React from 'react'
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* Logo Start */}
            <a href="index.html" className="logo">Training<em> Studio</em></a>
            {/* Logo End */}
            {/* Menu Start */}
            <ul className="nav">
              <li className="scroll-to-section">
              <Link
                activeClass="active scroll-to-section"
                to="top"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='scroll-to-section'
              >
               Home
              </Link>
              </li>
              <li className="scroll-to-section">
                <Link
                  activeClass="active scroll-to-section"
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={500}
                  className='scroll-to-section'
                >
                About
                </Link>
              </li>
              <li className="scroll-to-section">
                <Link
                  activeClass="active scroll-to-section"
                  to="our-classes"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={600}
                  className='scroll-to-section'
                >
                Classes
                </Link>
              </li>
              <li className="scroll-to-section">
                <Link
                  activeClass="active scroll-to-section"
                  to="schedule"
                  spy={true}
                  smooth={true}
                  offset={70}
                  duration={700}
                  className='scroll-to-section'
                >
                Schedules
                </Link>
              </li>
              <li className="scroll-to-section">
                <Link
                  activeClass="active scroll-to-section"
                  to="contact-us"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={800}
                  className='scroll-to-section'
                >
                Contact
                </Link>
              </li>
              
              
              <li className="main-button"><a href="#">Sign Up</a></li>
            </ul>
            <a className='menu-trigger'>
              <span>Menu</span>
            </a>
            {/* Menu End */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header