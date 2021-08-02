import React ,  {useState} from 'react'

export default function ComponenteNuevo() {

  const [items, setitems] = useState({ nombre: "OOOO"  });


    const onSubmitHandler = (evento) => {
        evento.preventDefault();
    };

    const onInputChange = (evento) => {
        const { name, value } = evento.target;
    
        setitems( (prevState) => ( {...prevState, [name]: value }) )

    };

    return (
        <div className="formularios col-md-5">
          <h1>Ingreso Club</h1>
          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="nombre"
                placeholder="Nombre"
                onChange={onInputChange}
              />
  
              <input
                type="text"
                name="apellido"
                className="form-control"
                placeholder="Apellido"
                onChange={onInputChange}
              />
              <input
                type="text"
                name="hobby"
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
          <ul>
            {Object.keys(items).map((key) => (
              <li key={key}>
                {key} {items[key]}
              </li>
            ))}
          </ul>
          </ul>
          <hr />
        </div>
      );
}
