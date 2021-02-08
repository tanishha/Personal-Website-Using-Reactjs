import React,{Component} from "react";

export default class ProfileComponent extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(p2.jpg)", backgroundColor:"#ccc"}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                        <br/>
                          <h1>
                            Hi! <br />
                            I'm Tanisha
                          </h1>
                          <p>
                          <br/>
                            {/* <a
                              className="btn btn-primary"
                              href="https://github.com/tanishha"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV
                            </a> */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(p2.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                        <br/>
                          <h1>
                            I am a<br /> Developer !!
                          </h1>
                          <p>
                          <br/>
                            <a
                              className="btn btn-primary btn-dark"
                              href="https://github.com/tanishha"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
