import React, { useEffect, useState } from "react";
import "./App.css";
import ListComponent from "./components/list/list.component";
import Routing from './App.routing';

function App() {

  return (
    <div className="App">
      <Routing/>
      {/* <ListComponent/> */}
    </div>
  );
}

export default App;
