import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import logo from "./Background.png";
import Profile from "./Profile";
import Detalle from "./Detalle";
import Misproductos from "./Misproductos";
import Agregarproducto from "./Agregarproducto";
import Home from "./Home";

import { BrowserRouter, Link, Routes, Route, Switch } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Profile" element={<Profile />} exact />
        <Route path="/Agregarproducto" element={<Agregarproducto />} exact />
        <Route path="/Detalle" element={<Detalle />} exact />
        <Route path="/Misproductos" element={<Misproductos />} exact />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
