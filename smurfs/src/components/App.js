import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <h3>
          {this.props.smurfs.map(smurf => {
            return <Smurf smurf={smurf} key={smurf.id} id={smurf.id} />;
          })}
        </h3>
        <SmurfForm />
      </div>
    );
  }
}

function func(state) {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  };
}

export default connect(
  func,
  { getSmurfs }
)(App);
