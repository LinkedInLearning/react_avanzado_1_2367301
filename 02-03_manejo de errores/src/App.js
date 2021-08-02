import "./App.css";
import MiComponente from "./components/MiComponente";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="display-4">Tienda Online</h1>
        <p className="lead"> Selecciona un producto </p>
      </div>

      <div className="container">
        <div className="row">
          <MiComponente title="Producto 1" />
          <MiComponente title="Producto 2" />
          <MiComponente title="Producto 3" />
        </div>
      </div>
    </div>
  );
}

export default App;
