import React from 'react';
import Index from './containers/Index.jsx';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Sidebar from './components/Sidebar.jsx';
import './App.css'; // CSSファイルをインポート

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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
