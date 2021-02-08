import React from "react";

export const Timeline = () => {
  return (
    <section className="colorlib-timeline" data-section="timeline">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">Education</span>
            <h2 className="colorlib-heading animate-box">Academics</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            <div className="fancy-collapse-panel">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default"></div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a className="collapsed" href="#timeline">
                        Kathmandu Engineering College <span> (2017-2022) </span>{" "}
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                      <a className="collapsed" href="#timeline">
                        Kathmandu Model Higher Secondary School{" "}
                        <span> (2015-2017)</span>
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFour">
                    <h4 className="panel-title">
                      <a className="collapsed" href="#timeline">
                        Siddhartha Vanasthali Institute <span>(2006-2015)</span>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
