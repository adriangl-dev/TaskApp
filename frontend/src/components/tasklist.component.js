/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DateFormat from 'moment';

const Task = props => (
  <tr>
    <td>{props.task.title}</td>
    <td>{props.task.description}</td>
    <td>{DateFormat(props.task.data).format("DD / MM / YYYY HH:MM:SS")}</td>
    <td>
      <Link to={"/edit/"+props.task._id}>Editar</Link> | <a href="#" onClick={() => { props.deleteTask(props.task._id) }}>Eliminar</a>
    </td>
  </tr>
)

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.state = {tasks: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3001/tasklist/')
      .then(response => {
        this.setState({ tasks: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTask(id) {
    axios.delete('http://localhost:3001/delete/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      tasks: this.state.tasks.filter(el => el._id !== id)
    })
  }

  taskList() {
    return this.state.tasks.map(currentTask => {
      return <Task task={currentTask} deleteTask={this.deleteTask} key={currentTask._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Tareas registradas</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            { this.taskList() }
          </tbody>
        </table>
      </div>
    )
  }
}