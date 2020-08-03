import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from './components/header';
import India from './components/india';
import World from './components/world';
class App extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div className="container-fluid">
        <BrowserRouter>
        <Header />
          <Switch>

            <Route exact path="/">
              <India />
            </Route>

            <Route path="/india">
              <India />
            </Route>

            <Route path="/world">
              <World/>
            </Route>
            
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
