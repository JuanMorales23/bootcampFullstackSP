import React from "react";

const RightSide = () => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col">
          <h3>Perfil Profesional</h3>
          <p>
            Como estudiante de ingeniería informática estoy buscando mi primera
            oportunidad laboral enfocada en mi carrera para seguir aprendiendo y
            desarrollarme tanto profesionalmente como en lo personal.
          </p>
          <p>
            Me considero un apasionado en la ingeniería informática y la
            tecnología, con excelentes habilidades de programación y lógica
            matemática adquiridas en el transcurso de mi formación
            universitaria.
          </p>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Experiencia Laboral</h3>
          <ul>
            <li>
              <h5>Libre Gestión</h5>
            </li>
              <li className="dotHide">
                <p>Desarollador</p>
              </li>
              <li className="dotHide">
                <p>Contacto: </p>
              </li>
              <li className="dotHide">
                <p>Octumbre 2022 - Actualmente</p>
              </li>
           
            <br />
            <li>
              {" "}
              <h5>
                Politécnico Colombiano Jaime Isaza Cadavid (Coordinación de
                Nuevas Tecnologías Educativas){" "}
              </h5>
            </li>

              <li className="dotHide">Practicante</li>
              <li className="dotHide">Contacto: 311-231-9563</li>
              <li className="dotHide">Marzo 2022 - Julio 2022</li>
            <br />
            <li>
              <h5>Giovanni Pia e Hijos S.A</h5>
            </li>

              <li className="dotHide">Operario</li>
              <li className="dotHide">Contacto: 384-33-00</li>
              <li className="dotHide">Noviembre 2015 - Diciembre 2015</li>

          </ul>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Educación</h3>
          <ul>
            <li>
              <h5>Politécnico Colombiano Jaime Isaza Cadavid</h5>
            </li>
            <li className="dotHide">Ingeniería Informática</li>
            <li className="dotHide">Enero 2016 - Julio 2022</li>
            <br />
            <li>
              <h5>Institución Educativa Federico Ángel</h5>
            </li>
            <li className="dotHide">Bachiller Académico</li>
            <li className="dotHide">Febrero 2013 - Noviembre 2014</li>
            <br />
            <li>
              <h5>Colegio Ciro Mendía</h5>
            </li>
            <li className="dotHide">Bachiller Académico</li>
            <li className="dotHide">Febrero 2009 - Noviembre 2012</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
