import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route path="/rooms/" component={Rooms} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
