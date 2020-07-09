import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppNavbar from './components/AppNavbar.jsx';
import Home from './components/Home.jsx';
import Background from './images/background.jpg';
import Animal_Case from './components/Animal_Case.jsx';
import Human_Case from './components/Human_Case.jsx';
import SignUpPage from './components/SignUpPage.jsx';
import LoginPageHealthCenter from './components/LoginPageHealthCenter.jsx';
import LoginPageAdmin from './components/LoginPageAdmin.jsx';

var sectionStyle = {
  backgroundImage: 'url(' + Background + ')',
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};

function App() {
  return (
    <div style={sectionStyle}>
      <Router>
        <AppNavbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/human_case' component={Human_Case} />
          <Route path='/animal_case' component={Animal_Case} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/loginPage' component={LoginPageHealthCenter} />
          <Route path='/loginPageAdmin' component={LoginPageAdmin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;