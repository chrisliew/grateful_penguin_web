import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Layout/Header";
import Facebook from "./Components/Login/Facebook";
import "./App.scss";

function App() {
  return (
    <div className='grateful_penguin_app'>
      <Header />
      <Facebook />
      <Home />
    </div>
  );
}

export default App;
