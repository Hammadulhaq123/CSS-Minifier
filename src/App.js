import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('dark')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = "#000";
      document.body.style.color = "#fff";
      document.querySelector(".night").style.display = "none";
      document.querySelector(".day").style.display = "initial";

    } else {
      setMode('light')
      document.body.style.background = "#fff";
      document.body.style.color = "#046ec4";
      document.querySelector(".day").style.display = "none";
      document.querySelector(".night").style.display = "initial";

    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar titlebar="Textifier" mode={mode} toggleMode={toggleMode} />
      {/* <Routes> */}
        {/* <Route path="/about"> */}
          {/* <About /> */}
        {/* </Route> */}
        {/* <Route path="/"> */}
          <TextForm title1="Enter your Text here..." title2="Converted Text here" mode={mode} />
        {/* </Route> */}
      {/* </Routes> */}
      {/* <Alrrt /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
