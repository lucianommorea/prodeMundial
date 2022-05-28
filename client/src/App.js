import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import React from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Detail from './components/CountryDetail/CountryDetail'

function App() {
  return (
    <React.Fragment>
      <Route exact path={'/'} component={LandingPage} /> 
      <Route path={'/home'} component={NavBar}/>
      <Route exact path={'/home'} component={Home} />
      <Route path={'/home/:id'} component={Detail} />
    </React.Fragment>
  );
}

export default App;
