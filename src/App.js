import Homepage from './components/homepage';
import Navbar from './components/navbar';
import React from 'react';
import './App.css';

function App() {
  // const [darkMode, setDarkMode] = React.useState('true')
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
