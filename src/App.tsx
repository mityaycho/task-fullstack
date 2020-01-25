import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = (props: any) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{props.value}</span>
				<button>Counter</button>
      </header>
    </div>
  );
}

export default App;