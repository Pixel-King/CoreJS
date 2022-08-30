import React, { Component, useContext } from 'react';
//import styles from '../index.css'


// import { ThemeContext } from './ThemeProvider';
import { FiMoon, FiSun } from 'react-icons/fi'; //npm install react-icons --save
import { themes } from './ThemeContext';

interface IProps {
}

interface IState {
  theme: string | null;
}
// //https://www.p1t1ch.com/blog/dark-mode-which-we-deserve/

class Toggle extends React.Component<IProps, IState> {
  constructor(props: string) {
    super(props)
    this.state = {
      theme: this.themeLS(),
    }
  }

  themeLS() {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    } else return 'light'
  }

  render() {
    const root = document.querySelector(':root') as HTMLElement;
        const components: string[] = [
          'body-background',
          'card-background',
          'text',
          'shadow',
          'header-background',
          'footer-background',
          'toggle',
          'nav-link',
          'color',
          'button',
          'button-hover',
          'button-text'
        ];
        components.forEach((component) => {
          root.style.setProperty(`--${component}-default`, `var(--${component}-${this.state.theme})`)
        })
    return (
      <div className='toggleTheme'>
        <button onClick={this.toggleTheme}>
          {this.state.theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    )
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark'
    }, () => {
        //console.log(this.state.theme);
        if (this.state.theme) {
          localStorage.setItem('theme', this.state.theme);
        }
        this.render()
      }
    );


    
  } 
}

  
export default Toggle
