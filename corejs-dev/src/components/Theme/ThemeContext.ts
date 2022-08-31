import React from 'react'

export type themesType = {
  theme: 'light' | 'dark'
}

export const themes = {
  dark: 'dark',
  light: 'light',
}



export const ThemeContext = React.createContext({})