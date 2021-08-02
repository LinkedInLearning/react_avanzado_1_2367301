import React, { Component} from "react";
 

export default class Componente extends Component {

    constructor(props) {
        super(props);
        this.state = { comprado: false };
    }


    comprarProducto = (event)=>{
        this.setState({ comprado: true})
    };
 
    render() {
        return (
            <div className="col-md-4">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title">Producto</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <button onClick={this.comprarProducto} className="btn btn-primary">
                    Comprar
                  </button>
                  {this.state.comprado && <div className='text-danger'>Producto comprado</div>}
                   
                </div>
              </div>
            </div>
          );
    }
}
