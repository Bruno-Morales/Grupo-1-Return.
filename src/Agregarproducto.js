import React from "react";
import { Fragment } from "react";
import "./App.css";

function Agregarproducto() {
  return (
    <Fragment>
      <div className="input-contenedor">
        <br />
        <div className="centrado">
          <br />
          <br />
          <input
            type="text"
            placeholder="Nombre del producto"
            className="titulo"
            name="name"
            id="name"
          ></input>
          <br />
          <br />
          <input
            type="text"
            placeholder="Precio"
            className="titulo"
            name="price"
            id="price"
          ></input>
          <br />
          <br />

          <div className="titulo-file">
            <div
              className="imagen-agregado"
              name="imagen-agregado"
              id="imagen-agregado"
            >
              <br />
              <label className="categoria">
                <b>Categoria:</b>
              </label>
              <br />
            </div>
            <i className="fas fa-download"></i>

            <label className="label-file">
              <input type="file" name="image" />
              <i className="fas fa-download"></i> Agrega una imagen
            </label>
          </div>
          <div className="area">
            <textarea
              name="description"
              id="descripcion"
              cols="30"
              rows="10"
              className="text-area"
              placeholder=" Descripcion"
            ></textarea>
          </div>
          <input value="Agregar" className="wallpaper-button titulo" />
        </div>
      </div>
    </Fragment>
  );
}

export default Agregarproducto;
