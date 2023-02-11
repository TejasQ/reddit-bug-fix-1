import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from "react";
import NavBar from './components/NavBar.js'
import Questions from './pages/Questions'
import Home from './pages/Home'
import Teams from './pages/Teams'
import About from './pages/About.js'
import Contact from './pages/Contact'

function App() {

  return (
    <Router>
      <NavBar id='navParent' />
      
        <div className="App">
        <Routes>
          <Route exact path='/' element = {<Home />} />
          <Route path='/query' element={<Questions />} />
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </div>
      
    </Router>
  );
}

export default App;
