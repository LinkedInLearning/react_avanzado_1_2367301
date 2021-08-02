import React from 'react'

export default function ComponenteNuevo() {

    const onSubmitHandler = (evento) => {
        evento.preventDefault();
    };

    const onInputChange = (evento) => {
        const valor = evento.target.value;
        const nombre = evento.target.name;
    
        this.setState({ [nombre]: valor });
    };

    return (
        <div className="formularios col-md-5">
          <h1>Ingreso Club</h1>
          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="item1"
                placeholder="Nombre"
                onChange={onInputChange}
              />
  
              <input
                type="text"
                name="item2"
                className="form-control"
                placeholder="Apellido"
                onChange={onInputChange}
              />
              <input
                type="text"
                name="item3"
                className="form-control"
                placeholder="Hobby"
                onChange={onInputChange}
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
