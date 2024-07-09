import React, { useContext } from 'react'
import { themeContext } from '../contexts/themeContext';

function Header() {
  const [isDarkMode, setIsDarkMode]  = useContext(themeContext);

  return (
    <header className={`header-container ${isDarkMode ? 'dark' : ''}`}>
      <div className="header-content">
        <h2 className="title"><a href="/">Where in the world?</a></h2>
        <p className="theme-changer" onClick={() => {
          setIsDarkMode(!isDarkMode);
          localStorage.setItem('isDarkMode', !isDarkMode);
        }}><i className={`fa-solid fa-${isDarkMode ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{isDarkMode ? 'Light' : 'Dark'} Mode</p>
      </div>
    </header>
  )
}

export default Header;
