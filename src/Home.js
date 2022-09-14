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

function Home() {
  return (
    <Fragment>
      <div className="App">
        <body className="body" />
        <main>
          <div className="img-index">
            <img src={logo} />
            <div className="eslogan-index">
              Compra y vende lo mejor
              <br />y ultimo en tecnologia
            </div>
            <div className="burbujas">
              <div className="burbuja">
                <div className="cuadrado"></div>
              </div>
              <div className="burbuja">
                <div className="x"></div>
              </div>
              <div className="burbuja">
                <div className="circulo"></div>
              </div>
              <div className="burbuja">
                <div className="triangulo"></div>
              </div>
              <div className="burbuja">
                <div className="joystick">🎮</div>
              </div>
              <div className="burbuja"></div>
              <div className="burbuja"></div>
              <div className="burbuja"></div>
              <div className="burbuja"></div>
              <div className="burbuja"></div>
            </div>
          </div>

          <h4 className="headline-1">Popular categories</h4>
          <ul className="category" name="category">
            <a className="category-1" href="/products/computacion">
              <i className="fa-solid fa-tv category-icon"></i>
            </a>
            <a className="category-2" href="/products/celulares">
              <i className="fa-solid fa-mobile-retro"></i>
            </a>
            <a className="category-3" href="/products/consolas">
              <i className="fa-solid fa-gamepad category-icon"></i>
            </a>
            <a className="category-4" href="/products/componentes">
              <i className="fa-regular fa-keyboard"></i>
            </a>
          </ul>

          <h4 className="headline-1">Productos Nuevos</h4>

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

          <br />

          <br />
          <br />
          <br />
          <div className="new-product">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="1">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="2">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="3">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </main>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
      </div>
    </Fragment>
  );
}

export default Home;
