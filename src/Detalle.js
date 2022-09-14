import React from "react";
import "./App.css";

import pley1 from "./play4.jpg";

import { Fragment } from "react";

function Detalle() {
  return (
    <Fragment>
      <body>
        <br />
        <br />
        <div className="contenidoprinci">
          <div className="carde mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={pley1} />
              </div>

              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Nombre del Producto</h5>
                  <p className="card-text">Descripcion del producto</p>
                  <p className="card-text">
                    <small className="text-muted">
                      <div className="price-with-discount">$ 1.200</div>
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-0">
              <div className="price-with-discount">$ 1.200</div>
              <div className="col-md-3"></div>
              <div className="col-md-8">
                <button className="btn btn-primary agregar_carrito">
                  Añadir al carito
                </button>

                <div className="card-body">
                  <h5 className="card-title">Maneras de pagar</h5>
                  <p className="card-text">
                    Pagá de la mejor manera, con las opciones de pago de 3, 6 y
                    12 cuotas!
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Simula tus cuotas abajo.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Calcular en 3 cuotas!
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Paga en 3 cuotas de : $ 190.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Calcular en 6 cuotas!
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Paga en 6 cuotas de : $ 80.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Calcular en 12 cuotas!
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Paga en 12 cuotas de : $ 42.
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
}

export default Detalle;
