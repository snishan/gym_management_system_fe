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
                        <p>Start your fitness journey today without hesitation. Take the first step towards a healthier, stronger you – the time is now!</p>
                        <div className="main-button scroll-to-section">
                            <a href="/signup">Become a member</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  };
  
  export default SecondBanner;