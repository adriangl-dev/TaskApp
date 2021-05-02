import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import TaskList from './components/tasklist.component';
import CreateTask from './components/create-task.component';
import EditTask from './components/edit-task.component';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <br />
        <Route path="/" exact component={TaskList} />
        <Route path="/create" exact component={CreateTask} />
        <Route path="/edit/:id" exact component={EditTask} />
      </Router>
    </div>
  );
}

export default App;