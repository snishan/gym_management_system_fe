import React from 'react'

function Trainers() {
  return (
    <section className="section" id="trainers">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h2>Expert <em>Trainers</em></h2>
            <img src="./assets/images/line-dec.png" alt="" />
            <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="trainer-item">
            <div className="image-thumb">
              <img src="./assets/images/first-trainer.jpg" alt="" />
            </div>
            <div className="down-content">
              <span>Strength Trainer</span>
              <h4>Bret D. Bowers</h4>
              <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
              <ul className="social-icons">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-behance" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="trainer-item">
            <div className="image-thumb">
              <img src="./assets/images/second-trainer.jpg" alt="" />
            </div>
            <div className="down-content">
              <span>Muscle Trainer</span>
              <h4>Hector T. Daigl</h4>
              <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
              <ul className="social-icons">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-behance" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="trainer-item">
            <div className="image-thumb">
              <img src="./assets/images/third-trainer.jpg" alt="" />
            </div>
            <div className="down-content">
              <span>Power Trainer</span>
              <h4>Paul D. Newman</h4>
              <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
              <ul className="social-icons">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                <li><a href="#"><i className="fa fa-behance" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Trainers