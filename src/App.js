import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <body>
      {/* Preloader Start */}
      {/* <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */}
      {/* Preloader End */}
    
      {/* Header Area Start */}
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
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#features">About</a></li>
                  <li className="scroll-to-section"><a href="#our-classes">Classes</a></li>
                  <li className="scroll-to-section"><a href="#schedule">Schedules</a></li>
                  <li className="scroll-to-section"><a href="#contact-us">Contact</a></li>
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
      {/* Header Area End */}
    
      {/* Main Banner Area Start */}
      <div className="main-banner" id="top">
        <video autoPlay muted loop id="bg-video">
          <source src="./assets/images/gym-video.mp4" type="video/mp4" />
        </video>
    
        <div className="video-overlay header-text">
          <div className="caption">
            <h6>work harder, get stronger</h6>
            <h2>easy with our <em>gym</em></h2>
            <div className="main-button scroll-to-section">
              <a href="#features">Become a member</a>
            </div>
          </div>
        </div>
      </div>
      {/* Main Banner Area End */}
    
      {/* Features Item Start */}
      <section className="section" id="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>Choose <em>Program</em></h2>
                <img src="./assets/images/line-dec.png" alt="waves" />
                <p>Training Studio is free CSS template for gyms and fitness centers. You are allowed to use this layout for your business website.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="features-items">
                <li className="feature-item">
                  <div className="left-icon">
                    <img src="./assets/images/features-first-icon.png" alt="First One" />
                  </div>
                  <div className="right-content">
                    <h4>Basic Fitness</h4>
                    <p>Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.</p>
                    <a href="#" className="text-button">Discover More</a>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="left-icon">
                    <img src="./assets/images/features-first-icon.png" alt="second one" />
                  </div>
                  <div className="right-content">
                    <h4>New Gym Training</h4>
                    <p>If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.</p>
                    <a href="#" className="text-button">Discover More</a>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="left-icon">
                    <img src="./assets/images/features-first-icon.png" alt="third gym training" />
                  </div>
                  <div className="right-content">
                    <h4>Basic Muscle Course</h4>
                    <p>Credit goes to <a rel="nofollow" href="https://www.pexels.com" target="_blank">Pexels website</a> for images and video background used in this HTML template.</p>
                    <a href="#" className="text-button">Discover More</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="features-items">
                <li className="feature-item">
                  <div className="left-icon">
                    <img src="./assets/images/features-first-icon.png" alt="fourth muscle" />
                  </div>
                  <div className="right-content">
                    <h4>Advanced Muscle Course</h4>
                    <p>You may want to browse through <a rel="nofollow" href="https://templatemo.com/tag/digital-marketing" target="_parent">Digital Marketing</a> or <a href="https://templatemo.com/tag/corporate">Corporate</a> HTML CSS templates on our website.</p>
                    <a href="#" className="text-button">Discover More</a>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="left-icon">
                    <img src="./assets/images/features-first-icon.png" alt="training fifth" />
                  </div>
                  <div className="right-content">
                    <h4>Yoga Training</h4>
                    <p>This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections.</p>
                    <a href="#" className="text-button">Discover More</a>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="left-icon">
                    <img src="./assets/images/features-first-icon.png" alt="gym training" />
                  </div>
                  <div className="right-content">
                    <h4>Body Building Course</h4>
                    <p>Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.</p>
                    <a href="#" className="text-button">Discover More</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Features Item End */}
    
      {/* Call to Action Start */}
      <section className="section" id="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cta-content">
                <h2>Don’t <em>think</em>, begin <em>today</em>!</h2>
                <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</p>
                <div className="main-button scroll-to-section">
                  <a href="#our-classes">Become a member</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action End */}
    
      {/* Our Classes Start */}
      <section className="section" id="our-classes">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>Our <em>Classes</em></h2>
                <img src="./assets/images/line-dec.png" alt="" />
                <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
              </div>
            </div>
          </div>
          <div className="row" id="tabs">
            <div className="col-lg-4">
              <ul>
                <li><a href='#tabs-1'><img src="./assets/images/tabs-first-icon.png" alt="" />First Training Class</a></li>
                <li><a href='#tabs-2'><img src="./assets/images/tabs-first-icon.png" alt="" />Second Training Class</a></li>
                <li><a href='#tabs-3'><img src="./assets/images/tabs-first-icon.png" alt="" />Third Training Class</a></li>
                <li><a href='#tabs-4'><img src="./assets/images/tabs-first-icon.png" alt="" />Fourth Training Class</a></li>
              </ul>
              <div className="main-rounded-button"><a href="#">View All Schedules</a></div>
            </div>
            <div className="col-lg-8">
              <section className='tabs-content'>
                <article id='tabs-1'>
                  <img src="./assets/images/training-image-01.jpg" alt="First Class" />
                  <h4>First Training Class</h4>
                  <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                  <div className="main-button">
                    <a href="#">View Schedule</a>
                  </div>
                </article>
                <article id='tabs-2'>
                  <img src="./assets/images/training-image-02.jpg" alt="Second Training" />
                  <h4>Second Training Class</h4>
                  <p>Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  <div className="main-button">
                    <a href="#">View Schedule</a>
                  </div>
                </article>
                <article id='tabs-3'>
                  <img src="./assets/images/training-image-03.jpg" alt="Third Class" />
                  <h4>Third Training Class</h4>
                  <p>Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.</p>
                  <div className="main-button">
                    <a href="#">View Schedule</a>
                  </div>
                </article>
                <article id='tabs-4'>
                  <img src="./assets/images/training-image-04.jpg" alt="Fourth Training" />
                  <h4>Fourth Training Class</h4>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices elementum odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum commodo et.</p>
                  <div className="main-button">
                    <a href="#">View Schedule</a>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* Our Classes End */}
    
      <section className="section" id="schedule">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading dark-bg">
                <h2>Classes <em>Schedule</em></h2>
                <img src="./assets/images/line-dec.png" alt="" />
                <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="filters">
                <ul className="schedule-filter">
                  <li className="active" data-tsfilter="monday">Monday</li>
                  <li data-tsfilter="tuesday">Tuesday</li>
                  <li data-tsfilter="wednesday">Wednesday</li>
                  <li data-tsfilter="thursday">Thursday</li>
                  <li data-tsfilter="friday">Friday</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <div className="schedule-table filtering">
                <table>
                  <tbody>
                    <tr>
                      <td className="day-time">Fitness Class</td>
                      <td className="monday ts-item show" data-tsmeta="monday">10:00AM - 11:30AM</td>
                      <td className="tuesday ts-item" data-tsmeta="tuesday">2:00PM - 3:30PM</td>
                      <td>William G. Stewart</td>
                    </tr>
                    <tr>
                      <td className="day-time">Muscle Training</td>
                      <td className="friday ts-item" data-tsmeta="friday">10:00AM - 11:30AM</td>
                      <td className="thursday friday ts-item" data-tsmeta="thursday" >2:00PM - 3:30PM</td>
                      {/* data-tsmeta="friday" */}
                      <td>Paul D. Newman</td>
                    </tr>
                    <tr>
                      <td className="day-time">Body Building</td>
                      <td className="tuesday ts-item" data-tsmeta="tuesday">10:00AM - 11:30AM</td>
                      <td className="monday ts-item show" data-tsmeta="monday">2:00PM - 3:30PM</td>
                      <td>Boyd C. Harris</td>
                    </tr>
                    <tr>
                      <td className="day-time">Yoga Training Class</td>
                      <td className="wednesday ts-item" data-tsmeta="wednesday">10:00AM - 11:30AM</td>
                      <td className="friday ts-item" data-tsmeta="friday">2:00PM - 3:30PM</td>
                      <td>Hector T. Daigle</td>
                    </tr>
                    <tr>
                      <td className="day-time">Advanced Training</td>
                      <td className="thursday ts-item" data-tsmeta="thursday">10:00AM - 11:30AM</td>
                      <td className="wednesday ts-item" data-tsmeta="wednesday">2:00PM - 3:30PM</td>
                      <td>Bret D. Bowers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* Testimonials Starts */}
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
      {/* Testimonials Ends */}
    
      {/* Contact Us Area Starts */}
      <section className="section" id="contact-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div id="map">
                <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="600px" frameBorder={0} style={{border: 0}} allowFullScreen />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="contact-form">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input name="name" type="text" id="name" placeholder="Your Name*" required />
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <fieldset>
                        <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email*" required />
                      </fieldset>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input name="subject" type="text" id="subject" placeholder="Subject" />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea name="message" rows={6} id="message" placeholder="Message" required defaultValue={""} />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="main-button">Send Message Now</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
                {/* contact */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us Area End */}
      {/* Footer Starts */}
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
      {/* Footer End */}
    </body>
    </div>
  );
}

export default App;
