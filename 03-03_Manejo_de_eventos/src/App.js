import './App.css';
import Componente from './components/Componente';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="display-4">Tienda Online</h1>
        <p className="lead"> Selecciona un producto </p>
      </div>

      <div className="container">
        <div className="row">
          <Componente title="Producto 1" />
          <Componente title="Producto 2" />
          <Componente title="Producto 3" />
        </div>
      </div>
    </div>
  );
}

export default App;
