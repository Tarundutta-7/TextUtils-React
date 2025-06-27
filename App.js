import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    
    })
    setTimeout(()=>
    {
      setAlert(null);
    },1700);
    
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#5D8AA8';
      showAlert("Dark mode has been enabled","Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      
      showAlert("Light mode has been enabled","Success");
    }
  };

  return (
    <>
    <Router>         
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert= {alert}/>
      <div className="container my-3">
        <Routes>          {/* routes replaced the switch */}                               
          
          <Route path="/about" element={<About />} />
          </Routes>

     <Routes>
  <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
</Routes>

      </div>
      </Router>
    </>
  );
}

export default App;

