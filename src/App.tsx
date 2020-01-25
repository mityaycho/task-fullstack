import React from 'react';
import logo from './logo.svg';
import './App.css';
import {increase} from "./redux/counter-reducer";
import {connect} from "react-redux";

const App: React.FC = (props: any) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{props.value}</span>
				<button onClick={props.increase}>Counter</button>
      </header>
    </div>
  );
};

const mstp = (state: any) => ({
   value: state.counter.value
});

export default connect(mstp, { increase })(App);