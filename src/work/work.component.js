import React from "react";

export const Work = () => {
  return (
    <section className="colorlib-timeline" data-section="work">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">TIMELINE</span>
            <h2 className="colorlib-heading animate-box">WORK EXPERIENCE</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              <article
                className="timeline-entry animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-1">
                    <i className="fas fa-work"></i>
                  </div>

                  <div className="timeline-label">
                    <h2>Intern at Asterdio Inc.</h2>
                    <p> Full Stack Developer </p>
                  </div>
                </div>
              </article>

              <article
                className="timeline-entry begin animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-none"></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
