import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from "react";
import NavBar from './components/NavBar.js'
import Questions from './pages/Questions'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <NavBar />
      
        <div className="App">
        <Routes>
          <Route exact path='/' element = {<Home />} />
          <Route path='/query' element={<Questions />} />
        </Routes>
        </div>
      
    </Router>
  );
}

export default App;
