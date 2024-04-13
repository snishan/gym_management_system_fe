import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="social-icons">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-behance" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              </ul>
            </div>
            <div className="col-lg-12">
              <ul className="footer-menu">
                <li><a href="#top">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#our-classes">Classes</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#trainers">Trainers</a></li>
                <li><a href="#contact-us">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-12">
              <div className="sub-footer">
                
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer