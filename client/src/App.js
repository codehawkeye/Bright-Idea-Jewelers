import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "../src/components/wrapper";
import Header from "../src/components/Header";
import Home from "./pages/Home";


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Home />
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
