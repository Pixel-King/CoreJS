import React from "react";
import { FiMoon, FiSun } from 'react-icons/fi'; //npm install react-icons --save

//https://www.p1t1ch.com/blog/dark-mode-which-we-deserve/

const Toggle = () => {
 //const [colorScheme, setColorScheme] = useColorScheme()

  return (
    <button
      //onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
      aria-label="Dark theme"
      //aria-pressed={colorScheme === 'dark'}
    >
      {<FiMoon />}
      {<FiSun />}
    </button>
  )
}

  
export default Toggle
