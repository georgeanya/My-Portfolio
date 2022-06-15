import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import React from "react";
import "./App.css";


function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkMode() {
    setDarkMode(prevState => !prevState);
    
  }
  return (
    <div className="App">
      <Navbar toggle={toggleDarkMode} theme={darkMode} />
      <Homepage theme={darkMode} />
    </div>
  );
}

export default App;
