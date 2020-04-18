import React, { Component } from "react";

const ThemeContext = React.createContext();
const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends Component {
  toggleTheme = (evt) => {
    this.setState({ theme: evt.target.checked ? "App-light" : "App-dark" });
  };

  state = {
    theme: "App-light",
    toggleTheme: this.toggleTheme,
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

class Slider extends Component {
  render() {
    return (
      <label className="Theme-switch">
        <ThemeConsumer>
          {({ toggleTheme, theme }) => (
            <input
              onChange={toggleTheme}
              type="checkbox"
              checked={theme === "App-light"}
            />
          )}
        </ThemeConsumer>
        <span className="Theme-slider Theme-round" />
      </label>
    );
  }
}

const SliderWrapper = () => <Slider />;

const AppTheme = ({ children, ...props }) => (
  <ThemeProvider>
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`${props.className} ${theme}`}>
          {children}
          <SliderWrapper />
        </div>
      )}
    </ThemeConsumer>
  </ThemeProvider>
);

export default AppTheme;
