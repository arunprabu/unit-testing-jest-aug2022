import React, { useState } from 'react'

const ThemeSwitcher = () => {
  const [theme, setTheme ] = useState('light');

  // my css styles
  const myTheme = {
    dark: {
      backgroundColor: '#000',
      color: '#fff'
    },
    light: {
      backgroundColor: '#fff',
      color: '#000'
    }
  }

  const handleToggleTheme = () => {
    const nextTheme = (theme === 'light'? 'dark': 'light')
    setTheme(nextTheme);
  }

  return (
    <div style={theme === 'light'? myTheme.light : myTheme.dark}>
      <h2>ThemeSwitcher | User Generated Event and Enzyme</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={handleToggleTheme}>Switch Theme</button>
      <br /><br />
      <a href="https://enzymejs.github.io/enzyme/docs">Refer Enzyme Examples</a>
    </div>
  )
}

export default ThemeSwitcher