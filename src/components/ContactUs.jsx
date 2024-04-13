import React from 'react'

function ContactUs() {
  return (
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
  )
}

export default ContactUs