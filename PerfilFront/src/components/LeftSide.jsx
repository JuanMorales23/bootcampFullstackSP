import React from "react";

const LeftSide = () => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col">
          <h3>Información de contacto</h3>
          <div class="table-responsive">
            <table class="table">
              <tr>
                <td className="tdIcon">icono</td>
                <td>Facebook</td>
              </tr>
              <tr>
                <td>icono</td>
                <td>Facebook</td>
              </tr>
              <tr>
                <td>icono</td>
                <td>Facebook</td>
              </tr>
              <tr>
                <td>icono</td>
                <td>Facebook</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Fecha / Lugar de nacimiento</h3>
          <p>11/23/1997</p>
          <p>Caldas - Antioquia</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Habilidades Técnicas</h3>
        </div>
      </div>
      <div className="row align-items-end">
        <div className="col">
          <h3>Idiomas</h3>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
