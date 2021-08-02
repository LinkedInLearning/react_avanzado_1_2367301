import React  from "react";
import MiError from "./MiError";

export default function MiComponente(props) {
  const [visibleError, setVisibleError] = React.useState(false);

  const comprarProducto = (e) => {
    try {
      e.metodoIncorrecto();
    } catch (error) {
      displayError();
    }
  };

  const displayError = () => {
    setVisibleError(true);
  };

  if(!props.title) {
    throw new Error("Error en MiComponente");
  }
  return (
    <div className="col-md-4">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button onClick={comprarProducto} className="btn btn-primary">
            Comprar
          </button>
          {visibleError && <MiError />}
        </div>
      </div>
    </div>
  );
}
