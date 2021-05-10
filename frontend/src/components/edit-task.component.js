import React, { Component } from 'react';
import axios from 'axios';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";

registerLocale("es",es);

export default class EditTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            data: new Date()
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        //Guardamos en BD
        var task = {
            title: this.state.title,
            description: this.state.description,
            data: this.state.data
        }
        axios.post(process.env.REACT_APP_BASE_URL+"/edit/"+this.props.match.params.id, task)
        .then(res => window.location = "/");
    }
    componentDidMount(){
        axios.get(process.env.REACT_APP_BASE_URL+"/task/"+this.props.match.params.id)
        .then(response => {
            this.setState({
                title: response.data.title,
                description: response.data.description,
                data: new Date(response.data.data)
            })
        })
    }
    onChangeTitle(e){
        this.setState({
            title: e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }
    onChangeDate(date){
        this.setState({
            data: date
        })
    }

  render() {
    return (
      <div>
          <h3>Editar tarea existente</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Título</label>
                <input type="text" required className="form-control" value={this.state.title} onChange={this.onChangeTitle} placeholder="Título de la tarea" />
            </div>
            <div className="form-group">
                <label>Descripción</label>
                <input type="text" required className="form-control" value={this.state.description} onChange={this.onChangeDescription} placeholder="Descripción de la tarea" />
            </div>
            <div className="form-group">
                <label>Fecha de tarea</label>
                <div>
                    <DatePicker locale="es" showTimeSelect timeFormat="HH:mm" dateFormat="dd/MM/yyyy HH:mm" timeIntervals={15} selected={this.state.data} onChange={this.onChangeDate} />
                </div>
            </div>
            <div className="form-group">
                <input type="submit" value="Editar tarea" className="btn btn-primary" />
            </div>
          </form>
      </div>
    )
  }
}