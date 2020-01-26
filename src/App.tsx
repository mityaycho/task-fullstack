import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {getInitialValue, increaseValue} from "./redux/counter-reducer";
import {connect} from "react-redux";

interface IMapProps {
    value: number;
}

interface IDispatchProps {
    increase: () => void;
    getInitialValue: () => void;
}

type IProps = IMapProps & IDispatchProps;

const App: React.FC<IProps> = (props: any) => {

    useEffect(() => {
        props.getInitialValue()
    }, []);

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

const mstp = (state: any): IMapProps => ({
   value: state.counter.value
});

export default connect(mstp, { increase: increaseValue, getInitialValue })(App);