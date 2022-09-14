import React from "react";
import "./App.css";
import logo from "./Background.png";

import pley from "./play4.jpg";
import pley1 from "./play5.jpg";
import compu from "./compu1.jpeg";
import compu1 from "./compu3.jpg";
import celu1 from "./cel2.jpg";
import celu2 from "./cel1.png";

import { BrowserRouter, Link, Routes, Route, Switch } from "react-router-dom";
import { Fragment } from "react";

const Misproductos = () => {
  return (
    <Fragment>
      <br />
      <br />
      <div>
        {" "}
        <Link to="/Agregarproducto" class="anchor-agregar">
          <button className="btn btn-primary agregar_carrito">
            Agregar Producto
          </button>
        </Link>
      </div>
      <br />

      <seccion className="new-product">
        <div className="card card-bosstrap">
          <div className="card-body">
            <h5 className="card-title title-bosstrap"></h5>
            <div>
              <img src={pley} className="card-img-top img-bosstrap" />
            </div>
            <div>
              <p>descripción</p>
            </div>
            <Link className="ver-detalle" to="/Detalle">
              Detalle
            </Link>
            <hr />
            <p className="card-text" color="green">
              $ 25
            </p>
          </div>

          <button className="btn btn-primary agregar_carrito">
            Añadir al carito
          </button>
        </div>

        <div className="card card-bosstrap">
          <div className="card-body">
            <h5 className="card-title title-bosstrap"></h5>
            <div>
              <img src={pley} className="card-img-top img-bosstrap" />
            </div>
            <div>
              <p>descripción</p>
            </div>
            <Link className="ver-detalle" to="/Detalle">
              Detalle
            </Link>
            <hr />
            <p className="card-text" color="green">
              $ 25
            </p>
          </div>

          <button className="btn btn-primary agregar_carrito">
            Añadir al carito
          </button>
        </div>
        <div className="card card-bosstrap">
          <div className="card-body">
            <h5 className="card-title title-bosstrap"></h5>
            <div>
              <img src={celu1} className="card-img-top img-bosstrap" />
            </div>
            <div>
              <p>descripción</p>
            </div>
            <Link className="ver-detalle" to="/Detalle">
              Detalle
            </Link>
            <hr />
            <p className="card-text" color="green">
              $ 25
            </p>
          </div>

          <button className="btn btn-primary agregar_carrito">
            Añadir al carito
          </button>
        </div>

        <div className="card card-bosstrap">
          <div className="card-body">
            <h5 className="card-title title-bosstrap"></h5>
            <div>
              <img src={celu2} className="card-img-top img-bosstrap" />
            </div>
            <div>
              <p>descripción</p>
            </div>
            <Link className="ver-detalle" to="/Detalle">
              Detalle
            </Link>
            <hr />
            <p className="card-text" color="green">
              $ 25
            </p>
          </div>

          <button className="btn btn-primary agregar_carrito">
            Añadir al carito
          </button>
        </div>

        <div className="card card-bosstrap">
          <div className="card-body">
            <h5 className="card-title title-bosstrap"></h5>
            <div>
              <img src={compu1} className="card-img-top img-bosstrap" />
            </div>
            <div>
              <p>descripción</p>
            </div>
            <Link className="ver-detalle" to="/Detalle">
              Detalle
            </Link>
            <hr />
            <p className="card-text" color="green">
              $ 25
            </p>
          </div>

          <button className="btn btn-primary agregar_carrito">
            Añadir al carito
          </button>
        </div>
        <div className="card card-bosstrap">
          <div className="card-body">
            <h5 className="card-title title-bosstrap"></h5>
            <div>
              <img src={compu} className="card-img-top img-bosstrap" />
            </div>
            <div>
              <p>descripción</p>
            </div>
            <Link className="ver-detalle" to="/Detalle">
              Detalle
            </Link>
            <hr />
            <p className="card-text" color="green">
              $ 25
            </p>
          </div>

          <button className="btn btn-primary agregar_carrito">
            Añadir al carito
          </button>
        </div>

        <div className="card card-bosstrap">
          <div className="card-body">
            <h5 className="card-title title-bosstrap"></h5>
            <div>
              <img src={compu} className="card-img-top img-bosstrap" />
            </div>
            <div>
              <p>descripción</p>
            </div>
            <Link className="ver-detalle" to="/Detalle">
              Detalle
            </Link>
            <hr />
            <p className="card-text" color="green">
              $ 25
            </p>
          </div>

          <button className="btn btn-primary agregar_carrito">
            Añadir al carito
          </button>
        </div>
      </seccion>
    </Fragment>
  );
};

export default Misproductos;
