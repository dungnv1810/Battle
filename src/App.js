import React from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Battle from './Components/Battle';
import Popular from './Components/Popular';
import Search from './Components/Search';
import './App.css';

function App() {
  return (
      <div className='App'>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/battle' element={<Battle/>}/>
            <Route exact path='/popular' element={<Popular/>}/>
            <Route exact path='/search' element={<Search/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
