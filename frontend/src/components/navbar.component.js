import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Lista de tareas</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Tareas</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Crear tarea</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}