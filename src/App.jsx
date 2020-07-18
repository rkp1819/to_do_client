import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import axios from "axios";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/home" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
