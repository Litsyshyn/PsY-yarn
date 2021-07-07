import React from "react";
import Header from "../Header";
import Jumbo from "../Jumbo/Jumbo";
import Activity from "../Activity"

import "./App.css";
import Directions from "../Directions";
import Contacts from "../Contacts";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Jumbo />
      <Activity />
      <Directions />
      <Contacts />
    </div>
  );
};

export default App;
