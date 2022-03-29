import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

// import './App.css';
import Layout from './components/Layout/Layout';
import Preloader from './components/Preloader/Preloader';


function App() {
  const [procent, setProcent] = useState(0)
    useEffect(() => {
      setInterval(() => {
        setProcent(prev => prev += 1)
    }, 30);
    }, [])
  return (
    <div className="App">
      {!(procent >= 200) ?
       <Preloader procent={procent}/> 
       :
       <Routes>
       <Route path="/" element={<Layout />} />
     </Routes>
     
      }
     
     
    </div>
  );
}

export default App;
