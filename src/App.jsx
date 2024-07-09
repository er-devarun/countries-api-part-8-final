import { Outlet } from "react-router-dom";
import Header from "./components/Header"
import { useState } from "react";
import { themeContext } from "./contexts/themeContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem("isDarkMode")));
  
  return (
    <themeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      <Header />
      <Outlet context={isDarkMode}/>
    </themeContext.Provider>
  )
}

export default App;
