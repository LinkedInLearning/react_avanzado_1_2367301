import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }


  render() {
    if (this.state.error) {
      return (
        <div className="col-md-12">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title text-danger">ERROR</h5>
              <p className="card-text ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }

 
}
