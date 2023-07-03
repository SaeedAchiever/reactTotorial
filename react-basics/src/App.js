import React from "react";
import './App.css';
import Components from './components/Components';
import FunctionalComponents from './components/FunctionalComponents';
import ClassComponents from './components/ClassComponents';
import Jsx from './components/Jsx';
import Props from './components/Props';
import State from './components/State';
import SetState from './components/SetState';
import Destructuring from './components/Destructuring';
import EventHanling from './components/EventHanling';
import BindingEventHandlers from './components/BindingEventHandlers';
import MethParent from './components/MethParent'
import Condition from './components/Condition';
import ListRendering from './components/ListRendering';
import Styling from './components/Styling';
import FormHadling from './components/FormHadling';
import Mounting from './components/Mounting';
import Updating from './components/Updating';


function App() {
  return (
    <div className="App">

      <Components />
      <FunctionalComponents />
      <ClassComponents />
      <Jsx />
      <Props name="Props"/>      
      <State />
      <SetState />
      <Destructuring />
      <EventHanling />
      <BindingEventHandlers />
      <MethParent />
      <Condition />
      <ListRendering />
      <Styling />
      <FormHadling />
      <Mounting />
      <Updating />
    </div>
  );
}

export default App;
