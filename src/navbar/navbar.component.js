import React from "react";

export const NavbarComponent = () => {
  return (
    <div>
      <div>
        <nav
          href="#navbar"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i />
        </nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div
              className="author-img"
            />
            <h1 id="colorlib-logo">
              <a href="index.html">Tanisha Chaudhary</a>
            </h1>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#home" data-nav-section="home">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#about" data-nav-section="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" data-nav-section="skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#work" data-nav-section="work">
                   Timeline
                  </a>
                </li>
                <li>
                  <a href="#timeline" data-nav-section="timeline">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#contact" data-nav-section="contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <br />
          <hr className="w-10 bg-dark" />
          <div className="colorlib-footer">
            <p>
              <small>
                Crafted with <i className="icon-heart" aria-hidden="true" />{" "}
                <br></br>
                Inspired by{" "}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colorlib
                </a>
              </small>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};
