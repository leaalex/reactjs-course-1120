import React, {Component} from "react";
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="container">
            <div className="input-group m-3">
                <input type="text" className="form-control" placeholder="Recipient's username"
                       aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
