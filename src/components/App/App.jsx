import React from "react";
import Header from "../Header";
import Jumbo from "../Jumbo/Jumbo";
import Activity from "../Activity"

import "./App.css";
import Directions from "../Directions";
import Contacts from "../Contacts";
import Footer from "../Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Jumbo />
      <Activity />
      <Directions />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
