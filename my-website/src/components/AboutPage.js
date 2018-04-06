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
               <span className="about-title__title">Hey Im Shane! This is a little about me.</span>
            </div>
         </div>
         <div className="about-3">
            <div className="about-paragraph">
               <span className="about-paragraph__first">Hi! My name is Shane Schmaltz and welcome to my website! I made this personal/portolio website from scratch using react. I am a software developer from Calgary AB, Canada and I really love software. It's fascinating to me how software has the power to change the world in an almost endless amount of ways. My fundamental passion in life is to create software that makes someone's life better or easier in some form or another. This keeps me very motivated to follow new trends and learn new technologies/techniques constantly and this website should serve as a place to showcase at least some of that.  Aside from software and making software, I spend most of my time divided between playing bass guitar, working out, longboarding, playing video games or going on some sort of adventure. Thanks again for saying hi and please feel free to contact me for any reason!</span>
               <span className="about-paragraph__second"></span>
            </div>
         </div>
      </div>
    )
  }
};

export default AboutPage;
