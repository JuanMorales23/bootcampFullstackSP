import React from "react";

const RightSide = () => {
  return (
    <div className="container ml-0">
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
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Experiencia Laboral</h3>
          <ul>
            <li>
              <ul>
                <li className='dotHide'>Desarollador</li>
                <li className='dotHide'>Libre Gestión</li>
                <li className='dotHide'>Contacto: </li>
                <li className='dotHide'>Octumbre 2022 - Actualmente</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className='dotHide'>Practicante</li>
                <li className='dotHide'>
                  Politécnico Colombiano Jaime Isaza Cadavid (Coordinación de
                  Nuevas Tecnologías Educativas)
                </li>
                <li className='dotHide'>Contacto: 311-231-9563</li>
                <li className='dotHide'>Marzo 2022 - Julio 2022</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className='dotHide'>Operario</li>
                <li className='dotHide'>Giovanni Pia e Hijos S.A</li>
                <li className='dotHide'>Contacto: 384-33-00</li>
                <li className='dotHide'>Noviembre 2015 - Diciembre 2015</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Educación</h3>
          <ul>
            <li>
              <ul>
                <li className='dotHide'>Politécnico Colombiano Jaime Isaza Cadavid</li>
                <li className='dotHide'>Ingeniería Informática</li>
                <li className='dotHide'>Enero 2016 - Julio 2022</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className='dotHide'>Institución Educativa Federico Ángel</li>
                <li className='dotHide'>Bachiller Académico</li>
                <li className='dotHide'>Febrero 2013 - Noviembre 2014</li>
              </ul>
            </li>
            <li>
              <ul>
                <li className='dotHide'>Colegio Ciro Mendía</li>
                <li className='dotHide'>Bachiller Académico</li>
                <li className='dotHide'>Febrero 2009 - Noviembre 2012</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
