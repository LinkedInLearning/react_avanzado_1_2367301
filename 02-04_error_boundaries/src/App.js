import "./App.css";
import MiComponente from "./components/MiComponente";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="display-4">Tienda Online</h1>
        <p className="lead"> Selecciona un producto </p>
      </div>

      <div className="container">
        <div className="row">
          <ErrorBoundary>
            <MiComponente />
            <MiComponente title="Producto x" />
            <MiComponente title="Producto x" />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;
