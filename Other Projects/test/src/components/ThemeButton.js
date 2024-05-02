import React from 'react'

const ThemeButton = ({setTheme}) => {
  const changeTheme = () => {
    setTheme(prevState => prevState === "light"? "dark" : "light");
  }
  return (
    <button onClick={changeTheme}>Change Theme</button>
  )
}

export default ThemeButton