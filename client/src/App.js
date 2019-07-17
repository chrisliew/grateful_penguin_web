import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Layout/Header";
// import Facebook from "./Components/Login/Facebook";
import Register from "./Components/Login/Register";
import Login from "./Components/Login/Login";
import "./App.scss";

function App() {
  return (
    <div className='grateful_penguin_app'>
      <Header />
      <Register />
      <Login />
      {/* <Facebook /> */}
      <Home />
    </div>
  );
}

export default App;
