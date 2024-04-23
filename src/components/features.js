import React from "react";
import "../assets/scss/features.scss"
import lineDec from "../assets/img/features/line-dec.png"
import img1 from "../assets/img/features/features-first-icon.png"

const Features = () => {
    return (
        <section className="section" id="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h2>Choose <em>Program</em></h2>
                        <img src={lineDec} alt="waves"/>
                        <p>Discover your fitness journey with our diverse program offerings tailored to your goals and preferences. Choose from a variety of programs designed to help you achieve your fitness aspirations</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ul className="features-items">
                        <li className="feature-item">
                            <div className="left-icon">
                                <img src={img1} alt="First One"/>
                            </div>
                            <div className="right-content">
                                <h4>Basic Fitness</h4>
                                <p>Elevate your fitness foundation with our Basic Fitness program, perfect for beginners seeking to establish a solid groundwork for their health and wellness journey.</p>
                                <a href="#" className="text-button">Discover More</a>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="left-icon">
                                <img src={img1} alt="second one"/>
                            </div>
                            <div className="right-content">
                                <h4>New Gym Training</h4>
                                <p>Kickstart your fitness journey with our New Gym Training, designed to acquaint beginners with gym equipment and basic exercises for a confident start</p>
                                <a href="#" className="text-button">Discover More</a>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="left-icon">
                                <img src={img1} alt="third gym training"/>
                            </div>
                            <div className="right-content">
                                <h4>Basic Muscle Course</h4>
                                <p>Build strength and lay the foundation for your fitness journey with our Basic Muscle Course, tailored for beginners to develop muscle tone and confidence in the gym.</p>
                                <a href="#" className="text-button">Discover More</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul className="features-items">
                        <li className="feature-item">
                            <div className="left-icon">
                                <img src={img1} alt="fourth muscle"/>
                            </div>
                            <div className="right-content">
                                <h4>Advanced Muscle Course</h4>
                                <p>Unleash your strength and sculpt your physique with our Advanced Muscle Course, designed to push experienced enthusiasts to their limits and achieve remarkable gains.</p>
                                <a href="#" className="text-button">Discover More</a>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="left-icon">
                                <img src={img1} alt="training fifth"/>
                            </div>
                            <div className="right-content">
                                <h4>Yoga Training</h4>
                                <p>Find inner peace and enhance flexibility with our Yoga Training, where expert guidance and serene environments converge for a transformative wellness experience.</p>
                                <a href="#" className="text-button">Discover More</a>
                            </div>
                        </li>
                        <li className="feature-item">
                            <div className="left-icon">
                                <img src={img1} alt="gym training"/>
                            </div>
                            <div className="right-content">
                                <h4>Body Building Course</h4>
                                <p>Transform your physique with our intensive Body Building Course, designed to sculpt muscles and maximize strength gains under the guidance of experienced trainers.</p>
                                <a href="#" className="text-button">Discover More</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    );
  };
  export default Features;