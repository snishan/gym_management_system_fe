import React from "react";
import "../assets/scss/trainers.scss"
import img from '../assets/img/trainers/line-dec.png'
import trainer1 from '../assets/img/trainers/first-trainer.jpg'
import trainer2 from '../assets/img/trainers/second-trainer.jpg'
import trainer3 from '../assets/img/trainers/third-trainer.jpg'
import trainer01 from '../assets/img/trainers/trainer-01.jpeg'

const Trainers = () => {
    return (
        <section className="section" id="trainers">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h2>Expert <em>Trainers</em></h2>
                        <img src={img} alt=""/>
                        <p>Train with confidence alongside our team of expert trainers, each equipped with a wealth of experience and a passion for helping you reach your fitness goals. Receive personalized guidance, motivation, and support to maximize your potential and achieve lasting results.</p>
                    </div>
                </div>
            </div>
            <div className="row m-auto">
            <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="trainer-item">
                        <div className="image-thumb">
                            <img className="trainer-img" src={trainer01} alt=""/>
                        </div>
                        <div className="down-content">
                            <span>Main Trainer</span>
                            <h4>Udesh Mahathanthila</h4>
                            <p>Dedicated fitness professional with a passion for improving client health, wellness and quality of life. Deliver high-energy training using the latest techniques in exercise science, cardio programs and strength training.
</p>
                            <ul className="social-icons">
                                <li><a href="https://www.facebook.com/udesh.mahathanthila/"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://lk.linkedin.com/in/udesh-mahathanthila-b09945b6"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-4">
                    <div className="trainer-item">
                        <div className="image-thumb">
                            <img src={trainer2} alt=""/>
                        </div>
                        <div className="down-content">
                            <span>Muscle Trainer</span>
                            <h4>Hector T. Daigl</h4>
                            <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
                            <ul className="social-icons">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-4">
                    <div className="trainer-item">
                        <div className="image-thumb">
                            <img src={trainer3} alt=""/>
                        </div>
                        <div className="down-content">
                            <span>Power Trainer</span>
                            <h4>Paul D. Newman</h4>
                            <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
                            <ul className="social-icons">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    );
  };
  export default Trainers;