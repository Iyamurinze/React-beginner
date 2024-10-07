import React from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import Main from './componets/Main';
function App() {
const [darkMode, setDarkMode] = React.useState(true)
function toggleDarkMode(){
  setDarkMode(prevMode => !prevMode)
}
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
