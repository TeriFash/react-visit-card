import React from "react";
import { Link } from "react-scroll";
import settings from "../../store/settings";
import { Linkedin, Github, Telegram } from "./../../store/icons";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side__drawer";
  if (props.show) {
    drawerClasses = "side__drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <div className="closeMenu">
        <p onClick={props.click}>x</p>
      </div>
      <ul>
        {settings.toolbar.map((toolbars, index) => {
          return (
            <li key={index}>
              <Link
                to={toolbars.to}
                spy={true}
                smooth={true}
                offset={17}
                duration={1000}
                activeClass="active-mobile"
                className="hover__effect"
                onClick={props.click}
              >
                {toolbars.link}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="Main-social-link">
        {settings.socials.map((social, index) => {
            
            const setIcon = (ico) => {
              switch (ico) {
                case 'linkedin':
                  return (<Linkedin/>);
                case 'github':
                  return (<Github/>);
                case 'telegram':
                  return (<Telegram/>);
                default:      
                  return ( <i className={ico}>{ico}</i> );
              }
            }

            return (
              <li key={index}>
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
          })}
      </ul>
    </nav>
  );
};

export default sideDrawer;
