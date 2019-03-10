import React, { Component } from 'react';

class Instructions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className="section" id="about">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-md-8 col-lg-6 text-center">
              <h2 className="lg-title mb-2">
                How does it work?
              </h2>
            </div>
          </div>
          <div className="row justy-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="text-center feature-block">
                <div className="feature-icon-block mb-4">1</div>
                <p>Open Google Maps and navigate to the reviews page.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="text-center feature-block">
                <div className="feature-icon-block mb-4">2</div>
                <p>Copy the entire review sidebar.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="text-center feature-block">
                <div className="feature-icon-block mb-4">3</div>
                <p>Paste into box below and click "Analyze".</p>
              </div>
            </div>
          </div>
        </div>
      </section> 
    );
  }
}

export default Instructions;