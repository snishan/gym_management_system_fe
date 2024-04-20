import React from "react";
import "../assets/scss/secondBanner.scss"


const SecondBanner = () => {
    return (
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
    );
  };
  
  export default SecondBanner;