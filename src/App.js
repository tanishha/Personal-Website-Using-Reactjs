import React from "react";
import "./App.css";

import { NavbarComponent } from "./navbar/navbar.component";
import ProfileComponent from "./profile/profile.component";
import { About } from "./about/about.component";
import { Skill } from "./skill/skill.component";
import { Timeline } from "./academics/academic.component";
import { Contact } from "./contact/contact.component";
import { Work } from "./work/work.component";

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <NavbarComponent></NavbarComponent>
        <div id="colorlib-main">
          <ProfileComponent></ProfileComponent>
          <About></About>
          <Skill></Skill>
          <Work></Work>
          <Timeline></Timeline>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;
