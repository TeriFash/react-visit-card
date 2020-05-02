import React from "react";
import Fade from "react-reveal/Fade";
import { avatar } from "../img";
import settings from "../store/settings";
import { Link } from "react-scroll";
import MainContainer from "../_components/MainContainer";
import { Linkedin, Github, Telegram } from "./../store/icons";


function Header(props) {
  const anchors = settings.anchors.map(anchor => {
    return (
      <li key={anchor}>
        <Link 
          to={anchor.to}
          spy={true}
          smooth={true}
          offset={17}
          duration={1000}
          activeClass="active-mobile"
          className="hover__effect">
            {anchor.text}
        </Link>
      </li>
    );
  });

  const social = settings.socials.map((social, i) => {
    
    const setIcon = (ico) => {
      switch (ico) {
        case 'linkedin':
          return (<Linkedin />);
        case 'github':
          return (<Github />);
        case 'telegram':
          return (<Telegram />);
        default:      
          return ( <i className={ico}>{ico}</i> );
      }
    }
    return (
      <li key={i}>
        <a
          href={social.to}
          title={social.title}
          rel="noopener noreferrer"
          target={'_blank'}
          className="hover__effect"
          children={setIcon(social.icon)} 
        />
      </li>
    );
  });

  return (
    <React.Fragment>
      <section id="home">
        <div className="grid-container-header overlay-header">
          <Fade up>
            <div className="item1">
              {/* <div className="header-info">
                <div className="btn"> Hello i 'm</div>
                <h2> {props.name} </h2>
                <h4> {props.job} </h4>
              </div> */}
              <MainContainer>
                <ul className="Main-Link"> { anchors } </ul>
                <ul className="Main-social-link"> { social } </ul>
              </MainContainer>
            </div>
          </Fade>
          <Fade up>
            <div className="item2">
              <img className="img-fluid" src={avatar} alt="" />
            </div>
          </Fade>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Header;
