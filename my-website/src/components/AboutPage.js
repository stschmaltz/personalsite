import React, {Component} from "react";
import "../css/styles.css";

class AboutPage extends Component {
  render() {
    return (
      <div className="about">
         <div className="about-2">
            <div className="about-pic">
               <img src="https://i.imgur.com/81qyN1y.jpg" alt="" className="about-pic__img"/>
            </div>
            <div className="about-title">
               <span className="about-title__intro">Hey Im Shane!</span>
               <span className="about-title__desc">This is a bit about me.</span>
            </div>
         </div>
         <div className="about-3">
            <div className="about-paragraph">
               <span className="about-paragraph__first">Hi my name is Shane Schmaltz. I’m a software developer from Calgary Alberta Canada. Welcome to my website! I made it myself using react. I have a lot of interests, however I’m most fascinated with software and its ability to change the world. I like to think of myself as a creative dreamer with an knack for problem solving. I also play bass guitar, love to go longboarding, enjoy weightlifting, playing video games and hugely value self improvement and well-being. Thanks for stopping by, please feel free to contact me using any of the links in my contact page.</span>
               <span className="about-paragraph__second"></span>
            </div>
         </div>
      </div>
    )
  }
};

export default AboutPage;
