import "./App.css";
import Item from "./components/Item";

function App() {
  const elementos = [
    {
      id: 1,
      titulo: "Café",
      definicion:
        "Bebida que se hace por infusión con la semilla tostada y molida del cafeto.",
    },
    {
      id: 1,
      titulo: "Té",
      definicion: "Infusión de las hojas del té.",
    },
    {
      id: 1,
      titulo: "Chocolate",
      definicion:
        "Bebida que se hace de chocolate desleído y cocido en agua o en leche.",
    },
  ];

  const listado = elementos.map( (miItem) => <Item titulo={miItem.titulo} definicion={miItem.definicion} />)

  return (
    <div className="App">
      <dl>
        {listado}
      </dl>
    </div>
  );
}

export default App;
