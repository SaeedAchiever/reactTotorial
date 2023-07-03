import React from "react";
import './App.css';
import Fragment from './components/Fragment';
import PureComp from './components/PureComp'
import Memo from './components/Memo';
import Counter from './components/Counter';
import Ref from './components/Ref';
import Portals from "./components/Portals";

function App() {
  return (
    <div className="App">

    <Fragment />
    <PureComp />
    <Memo />
    <Counter />
    <Ref />
    <Portals />
    
    </div>
  );
}

export default App;
