import React, { Component } from "react";

export default class Componente extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item1: "",
      item2: "",
      item3: "",
    };
  }

  onSubmitHandler = (evento) => {
    evento.preventDefault();
  };

  onNombreInputChange = (evento) => {
    const valor = evento.target.value;
    this.setState({ item1: valor });
  };

  onApellidoInputChange = (evento) => {
    const valor = evento.target.value;
    this.setState({ item2: valor });
  };

  onHobbyInputChange = (evento) => {
    const valor = evento.target.value;
    this.setState({ item3: valor });
  };

  onInputChange = (evento) => {
    const valor = evento.target.value;
    const nombre = evento.target.name;

    this.setState({ [nombre]: valor });
  };

  render() {
    return (
      <div className="formularios col-md-5">
        <h1>Ingreso Club</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="item1"
              placeholder="Nombre"
              onChange={this.onInputChange}
            />

            <input
              type="text"
              name="item2"
              className="form-control"
              placeholder="Apellido"
              onChange={this.onInputChange}
            />
            <input
              type="text"
              name="item3"
              className="form-control"
              placeholder="Hobby"
              onChange={this.onInputChange}
            />
            <button className="btn btn-primary" type="submit">
              Guardar
            </button>
          </div>
        </form>

        <hr />
        <h1>Valores</h1>
        <ul>
          <li>{this.state.item1}</li>
          <li>{this.state.item2}</li>
          <li>{this.state.item3}</li>
        </ul>
        <hr />
      </div>
    );
  }
}
