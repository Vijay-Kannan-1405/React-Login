import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Mainform from './components/Mainform';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';


function App() {
  return (
    <Router>
      <Mainform />

      <Route path='/' exact>
        <Login />
      </Route>

      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </Router>
  )
}

export default App

