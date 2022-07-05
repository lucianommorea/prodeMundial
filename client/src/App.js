import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import React from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Detail from './components/CountryDetail/CountryDetail';
import ActivityCreate from './components/ActivityCreate/activityCreate';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Switch> 
      <Route exact path={'/'} component={LandingPage} />    
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/home/country/:id'} component={Detail} />
      <Route exact path={'/home/activity'} component={ActivityCreate} />
      <Route component={NotFound} />
      </Switch>
      <Route path={'/home'} render={({match}) => <NavBar match={match}/>} />  
    </div>
  );
}

export default App;
