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
    this.setTheme()
  }

  setTheme() {
    document.documentElement.setAttribute("data-theme", this.state.theme)
  }

  toggleTheme() {
    const themes = ["dark", "light"];

    const currentPosition = themes.indexOf(this.state.theme);
    let newPosition = currentPosition + 1;

    if (currentPosition === themes.length - 1) {
      newPosition = 0;
    }
    const theme = themes[newPosition];

    document.documentElement.classList.add("color-theme-in-transition");
    this.setState({ theme });
    document.documentElement.setAttribute("data-theme", theme);
    window.setTimeout(() => {
      document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
  }

  render() {
    return (
      <div className="theme-switcher--wrapper">
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
