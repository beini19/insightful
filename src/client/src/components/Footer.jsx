import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="top-padding bg-dark">
        <div className="container">
          <div className="row align-self-center">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <a href="#" className="footer-brand text-white">
                  Contact us
                </a>
                <p>Do you have questions, comments, or suggestions for a new feature? Did you find a bug? Fill out the form to get in touch with us!</p>
              </div>
            </div>
          <div className="col-lg-8 ml-lg-auto col-md-6">
            <div className="row justify-content-center">
              {/* <div className="col-lg-8"> */}
                {/* <form action="mail.php" method="post" id="main_contact_form" className="contact__form"> */}
                <form onSubmit={this.handleContactUsSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="alert alert-success contact__msg" style={{'display': 'none'}} role="alert">
                        Your message was sent successfully.
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" name="name" id="name" className="form-control" placeholder="Name"/>
                        {/* <textarea className="form-control" onChange={this.handleChange} id="reviewText" rows="6" placeholder="Enter review text here..."></textarea>                        */}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input type="text" name="email" id="email" className="form-control" placeholder="Email *" required="required"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject *" required="required"/>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea name="message" id="message" cols="30" rows="6" className="form-control" placeholder="Message *" required="required"></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="submit text-center">
                        <input name="submit" type="submit" className="btn btn-primary btn-lg" value="Submit Now"/>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* </div> */}
          <div className="row justify-content-md-center footer-copy">
            <div className="col-lg-8 col-md-6 col-sm-6 text-center">
              <p className="lead text-white-50">&copy; Beini Fang | Design by Themeturn </p>
            </div>
          </div>
        </div>
      </footer>
    )
  };
}

export default Footer;