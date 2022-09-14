import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Fragment } from "react";

import logo from "./perfil.jpg";

const Profile = () => {
  return (
    <Fragment>
      <Header></Header>
      <body>
        <main>
          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />

          <div className="contendor-todo">
            <div className="contenedor-perfil">
              <a className="wallpaper-button" href="./logout">
                Salir de mi cuenta.
              </a>
              <div className="perfil">
                <br />
                <img className="iman" src={logo} />
                <hr />
                <h3 className="email-profile">
                  <i className="fa-solid fa-user"> .......</i>
                </h3>
                <hr />
                <h3 className="email-profile">
                  <i className="fa-solid fa-envelope"> ......</i>
                </h3>
                <hr />
                <small>Texto de descripcion</small>
                <br />
                <small>Texto de descripcion</small>
                <br />
                <small>Texto de descripcion</small>
                <br />
                <br />

                <div className="btn-productos-profile">
                  <div className="btn-producto-misProductos">
                    <button className="btn btn-primary">
                      Ver mis Productos
                    </button>
                  </div>
                  <div className="btn-producto-carrito">
                    <button className="btn btn-primary">
                      Productos en mi carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-desktop mb-5 desktop-card">
            <div className="card-header">Mis Pedidos</div>
            <div className="card-body">
              <table className="table table-responsive-md mb-0">
                <thead>
                  <tr>
                    <th>
                      <strong>#</strong>
                    </th>
                    <th className="th-lg">
                      <strong>Envío</strong>
                    </th>
                    <th className="th-lg">
                      <strong>Pago</strong>
                    </th>
                    <th>
                      <strong>Total</strong>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <small>Informacion de las ordenes del usuario</small>
                  <tr>
                    <th>1</th>
                    <td>Correo Andreani</td>
                    <td>VISA débito</td>
                    <td>$ 1.200</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Correo Argentino</td>
                    <td>VISA crédito</td>
                    <td>$ 1.800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <br />
          <br />

          <div className="card-phone mb-5">
            <small> Informacion de los pedidos del usuario</small>
            <div className="card-header">Mis Pedidos</div>
            <div className="card-body">
              <table className="table table-responsive-md mb-0">
                <thead>
                  <tr>
                    <th>
                      <strong>#</strong>
                    </th>
                    <th className="th-lg">
                      <strong>Envío</strong>
                    </th>
                    <th className="th-lg">
                      <strong>Pago</strong>
                    </th>
                    <th>
                      <strong>Total</strong>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Correo Argentino</td>
                    <td>Efectivo</td>
                    <td>$ 1.200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <br />
          <br />
        </main>
      </body>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </Fragment>
  );
};

export default Profile;
