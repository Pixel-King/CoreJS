import React, { Component, useContext } from 'react';
//import styles from '../index.css'


// import { ThemeContext } from './ThemeProvider';
import { FiMoon, FiSun } from 'react-icons/fi'; //npm install react-icons --save
import { themes } from './ThemeContext';

interface IProps {
}

interface IState {
  theme: string;
}
// //https://www.p1t1ch.com/blog/dark-mode-which-we-deserve/

class Toggle extends React.Component<IProps, IState> {
  constructor(props: string) {
    super(props)
    this.state = {
      theme: 'light'
    }
  }

  render() {
    return (
      <button onClick={this.toggleTheme}>
        {this.state.theme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>
    )
  }

  toggleTheme = () => this.setState({
    theme: this.state.theme === 'dark' ? 'light' : 'dark'
  }, () => this.render())

}

  
export default Toggle
