import React, { Component, createRef } from "react";

// import './ThemeSwitcher.scss'

class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputRef: createRef(),
      theme: localStorage.getItem('theme-store') || 'light',
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  componentDidMount() {
    const input = this.state.inputRef.current;

    if(input.value === 'dark' && !input.hasAttribute('checked')) {
      input.setAttribute('checked', true)
    }

    this.setTheme('theme', this.state.theme)
  }

  setTheme(dataName, themeName) {
    document.documentElement.setAttribute(dataName, themeName) 
    localStorage.setItem('theme-store', themeName);
  }

  setClass(remove) {
    document.documentElement.classList.toggle("theme-transition")

    if(remove) {
      document.documentElement.removeAttribute('class')
    }
  }

  toggleTheme = (event) => {
  
    const input = this.state.inputRef.current;
  
    if(!input.value === 'dark' && input.hasAttribute('checked')) {
      input.removeAttribute('checked')
    }

    let newTheme

    if (input.value === 'light') {
       newTheme = 'dark'
    } else {
       newTheme = 'light'
    }


    this.setClass();
    this.setState({ theme: newTheme });
    this.setTheme('theme', newTheme)
    window.setTimeout(() => {
      this.setClass(true);
    }, 1000);
  }

  render() {
    return (
      <div className="Theme-switcher--wrapper">
        <label className="Theme-switch">
          <input
            name='theme'
            ref={this.state.inputRef}
            value={this.state.theme}
            onInput={this.toggleTheme}
            type="checkbox"
          />

          <span className="Theme-slider Theme-round" />
        </label>
      </div>
    );
  }
}

export default ThemeSwitcher;
