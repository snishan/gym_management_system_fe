import React,{useState} from "react";
import "../assets/scss/ourClasses.scss"
import tabIcon from "../assets/img/ourCalass/tabs-first-icon.png"
import taining01 from "../assets/img/ourCalass/training-image-01.jpg"
import taining02 from "../assets/img/ourCalass/training-image-02.jpg"
import taining03 from "../assets/img/ourCalass/training-image-03.jpg"
import taining04 from "../assets/img/ourCalass/training-image-04.jpg"


const OurClasses = () => {
  const [tab, setTab] = useState(1)

  const handleTab=(val)=>{
    setTab(val)
  }

  const returnContainer=()=>{
    if (tab==1) {
      return(
        <article id='tabs-1'>
        <img src={taining01} alt="First Class"/>
        <h4>Functional Fitness</h4>
        <p>Enhance your everyday movements and improve functional strength with our Functional Fitness classes. These dynamic workouts incorporate a variety of exercises inspired by real-life activities, helping you develop strength, mobility, and stability to perform daily tasks with ease and confidence.</p>
        <div className="main-button">
            <a href="#">View Schedule</a>
        </div>
      </article>
      )
    }else if(tab==2){
      return(
        <article id='tabs-2'>
        <img src={taining02} alt="Second Training"/>
        <h4>Cardio Blast</h4>
        <p>Ignite your cardiovascular system with high-energy workouts designed to boost endurance and burn calories. From heart-pumping cardio sessions to dynamic interval training, our Cardio Blast classes offer a fun and effective way to improve your cardiovascular health and stamina.</p>
        <div className="main-button">
            <a href="#">View Schedule</a>
        </div>
      </article>
      )
    }else if(tab==3){
      return(
        <article id='tabs-3'>
        <img src={taining03} alt="Third Class"/>
        <h4>Strength & Tone</h4>
        <p>Sculpt your body and build lean muscle with our Strength & Tone classes. Whether you're a beginner or a seasoned lifter, our expert instructors will guide you through challenging exercises targeting all major muscle groups, helping you achieve your strength and toning goals.</p>
        <div className="main-button">
            <a href="#">View Schedule</a>
        </div>
      </article>
      )
    }else if(tab==4){
      return(
        <article id='tabs-4'>
        <img src={taining04} alt="Fourth Training"/>
        <h4>Mindful Movement (Yoga & Pilates)</h4>
        <p>Rejuvenate your body and calm your mind with our Mindful Movement classes, including yoga and Pilates. These classes focus on improving flexibility, core strength, and overall body awareness through mindful breathing and controlled movements, leaving you feeling refreshed and balanced.</p>
        <div className="main-button">
            <a href="#">View Schedule</a>
        </div>
      </article>
      )
    }
  }
    return (
     <section className="section" id="our-classes">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h2>Our <em>Classes</em></h2>
                        <img src="assets/images/line-dec.png" alt=""/>
                        <p>Explore our diverse range of classes tailored to your fitness goals. From yoga to strength training, find the perfect fit for your journey towards wellness.</p>
                    </div>
                </div>
            </div>
            <div className="row" id="tabs">
              <div className="col-lg-4">
                <ul>
                  <li><a  className={tab==1?'active-tab':''} onClick={()=>handleTab(1)}><img src={tabIcon}  alt=""/>Functional Fitness</a></li>
                  <li><a  className={tab==2?'active-tab':''} onClick={()=>handleTab(2)}><img src={tabIcon}  alt=""/>Cardio Blast</a></li>
                  <li><a  className={tab==3?'active-tab':''} onClick={()=>handleTab(3)}><img src={tabIcon} alt=""/>Strength & Tone</a></li>
                  <li><a  className={tab==4?'active-tab':''} onClick={()=>handleTab(4)}><img src={tabIcon}  alt=""/>Mindful Movement</a></li>
                  <div className="main-rounded-button"><a href="#">View All Schedules</a></div>
                </ul>
              </div>
              <div className="col-lg-8">
                <section className='tabs-content'>
                
                {returnContainer()}
                 
                 
                </section>
              </div>
            </div>
        </div>
    </section>
    );
  };
  
  export default OurClasses;