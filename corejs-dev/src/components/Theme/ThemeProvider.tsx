import React from 'react'
import { ThemeContext, themes } from './ThemeContext';

// статься с Хабра https://habr.com/ru/post/656995/


interface ThemeElement {
  children: React.ReactNode
}

const getTheme = () => {
    const theme = `${window?.localStorage?.getItem('theme')}`
    if (Object.values(themes).includes(theme)) return theme
  
    const userMedia = window.matchMedia('(prefers-color-scheme: light)')
    if (userMedia.matches) return themes.light
  
    return themes.dark
  }
  
  const ThemeProvider = ({ children }: ThemeElement) => {
    const [ theme, setTheme ] = React.useState(getTheme)
  
    React.useEffect(() => {
      document.documentElement.dataset.theme = theme
      localStorage.setItem('theme', theme)
    }, [ theme ])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
        </ThemeContext.Provider>
      )
    }
    
    export default ThemeProvider