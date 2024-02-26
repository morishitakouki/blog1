import React from 'react';
import Index from './containers/Index.jsx';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Sidebar from './components/Sidebar.jsx';
import './App.css'; // CSSファイルをインポート
import Create from './containers/Create.jsx';
import Register from './containers/Register.jsx';
import Login from './containers/Login.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/index">
              <Index />
            </Route>
            <Route exact path="/create">
             < Create />
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
