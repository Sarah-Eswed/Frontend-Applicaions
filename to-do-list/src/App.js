import React from 'react';
import './App.css';
import Do from './ToDo';
import Nav from './Nav';
import Landing from './Landing';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
     <Route path="/" exact component={Landing} />
     <Route path="/do" component={Do} />
     </Switch>

    </div>
    </Router>
  );
}



export default App;
