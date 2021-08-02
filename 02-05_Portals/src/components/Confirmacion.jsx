import React, { Component } from "react";

export default class Confirmacion extends Component {
  render() {
    return (
      <div className="confirmacion-background">
        <div className="modal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmar</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>No olvide llegar a tiempo</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
