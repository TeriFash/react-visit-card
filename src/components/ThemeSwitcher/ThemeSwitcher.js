import React, { Component } from "react";

// import './ThemeSwitcher.scss'

class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  componentDidMount() {
    this.setTheme('theme', this.state.theme)
  }

  setTheme(dataName, themeName) {
    document.documentElement.setAttribute(dataName, themeName)
  }

  setClass(remove) {
    document.documentElement.classList.toggle("theme-transition")

    if(remove) {
      document.documentElement.removeAttribute('class')
    }
  }

  toggleTheme() {
    const themes = ["dark", "light"];

    const currentPosition = themes.indexOf(this.state.theme);
    let newPosition = currentPosition + 1;

    if (currentPosition === themes.length - 1) {
      newPosition = 0;
    }
    const theme = themes[newPosition];

    this.setClass();
    this.setState({ theme });
    this.setTheme('theme', theme)
    window.setTimeout(() => {
      this.setClass(true);
    }, 1000);
  }

  render() {
    return (
      <div className="Theme-switcher--wrapper">
        <ThemeSwitcherRadioButton toggleTheme={this.toggleTheme} />
      </div>
    );
  }
}

const ThemeSwitcherRadioButton = ({ toggleTheme }) => (
  <label className="Theme-switch">
    <input
      onChange={(e) => toggleTheme()}
      type="checkbox"
    />
    <span className="Theme-slider Theme-round" />
  </label>
);

export default ThemeSwitcher;
