import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="section section-top section-full" id="header">
          <div className="bg-cover" style={{'background-color': 'grey'}}></div>
          <div className="bg-overlay"></div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-10 col-lg-7 ">
                <div className="banner-content">
                  <p className="text-white text-uppercase text-center text-xs">
                  </p>
                  <h1 className="text-white text-center mb-4 display-4 font-weight-bold">
                    Welcome to Insightful
                  </h1>
                  <p className="lead text-white text-center mb-5">
                    Insightful is a web application that gives you additional insight on reviews.
                  </p>
                  <p className="text-center mb-0" >
                    <Scrollchor to="about" className="nav-link">
                      <div className="btn btn-primary ">
                        Get Started
                      </div>
                    </Scrollchor>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Welcome;