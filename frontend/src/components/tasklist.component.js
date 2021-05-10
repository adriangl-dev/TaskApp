/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DateFormat from 'moment';

const Task = props => (
  <tr>
    <td>{props.task.title}</td>
    <td>{props.task.description}</td>
    <td>{DateFormat(props.task.data).format("DD / MM / YYYY HH:mm")}</td>
    <td>
      <Link to={"/edit/"+props.task._id}>Editar</Link> | <a href="#" onClick={() => { props.deleteTask(props.task._id) }}>Eliminar</a>
    </td>
  </tr>
)

const TaskCard = props => (
  <div className="card" style={{width: "18rem", float: "left", margin: "5px"}}>
    <div className="card-body">
      <p className="card-text"><small className="text-muted">{DateFormat(props.task.data).format("DD-MM-YYYY HH:mm")}</small></p>
      { props.vencimiento(props.task.data) }
      <h5 className="card-title">{props.task.title}</h5>
      <p className="card-text">{props.task.description}</p>
      <div style={{float: "right"}}>
          <Link to={"/edit/"+props.task._id}><i className="fas fa-edit"></i></Link>
          &nbsp;&nbsp;
          <a href="#" onClick={() => { props.deleteTask(props.task._id) }}><i className="fas fa-trash-alt"></i></a>
      </div>
    </div>
  </div>
)

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.vencimiento = this.vencimiento.bind(this); 
    this.state = {tasks: []};
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_BASE_URL+"/tasklist")
      .then(response => {
        this.setState({ tasks: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  vencimiento(fecha) {
    if(DateFormat(fecha).format("YYYYMMDDHHMMSS") <= DateFormat(new Date()).format("YYYYMMDDHHMMSS")){
      return <p className="card-text"><small className="alert alert-danger">Tarea vencida!</small></p>;
    }
  }

  deleteTask(id) {
    axios.delete(process.env.REACT_APP_BASE_URL+'/delete/'+id)
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

  cardList(){
    return this.state.tasks.map(currentTask => {
      return <TaskCard task={currentTask} deleteTask={this.deleteTask} vencimiento={this.vencimiento} key={currentTask._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3 style={{textAlign: "center"}}>Tareas registradas</h3>
       {/* <table className="table">
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
        </table>*/}
        <div>
        { this.cardList() }
        </div>
      </div>
    )
  }
}