import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './layout/Navbar'
import AddUser from './users/AddUser'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/users/add" component={AddUser}/>
      <Route component={NotFound}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
