import React from "react";
import gmail from '../assets/img/icons8-gmail-48.png';
import phone from '../assets/img/icons8-whatsapp-48.png';
import facebook from '../assets/img/icons8-facebook-48.png';
import linkedin from '../assets/img/icons8-linkedin-48.png';
import github from '../assets/img/icons8-github-48.png';

const LeftSide = () => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col">
          <h3>Información de contacto</h3>
          <div className="table-responsive">
            <table className="table">
              <tr>
              <td className="tdIcon py-0"><img src={phone} alt="Telefono" className="imgIcon"/></td>
                <td className="py-0"><p>+57 310-530-0721</p></td>
              </tr>
              <tr>
                <td className="tdIcon py-0"><a href="mailto:juanmr2311@gmail.com" target="_blank"><img src={gmail} alt="Correo" className="imgIcon"/></a></td>
                <td className="py-0"><p><a href="mailto:juanmr2311@gmail.com" target="_blank">juanmr2311@gmail.com</a></p></td>
              </tr>
              <tr>
              <td className="tdIcon py-0"><a href="www.facebook.com" target="_blank"><img src={facebook} alt="Facebook" className="imgIcon"/></a></td>
                <td className=""><p><a href="www.facebook.com" target="_blank">Juan Esteban Morales Rios</a></p></td>
              </tr>
              <tr>
              <td className="tdIcon py-0"><a href="https://www.linkedin.com/in/juan-esteban-morales-rios-52614b217/" target="_blank"><img src={linkedin} alt="Correo" className="imgIcon"/></a></td>
                <td className="py-0"><p><a href="https://www.linkedin.com/in/juan-esteban-morales-rios-52614b217/" target="_blank">https://www.linkedin.com/in/juan-esteban-morales-rios-52614b217/</a></p></td>
              </tr>
              <tr>
              <td className="tdIcon py-0"><a href="https://github.com/JuanMorales23" target="_blank"><img src={github} alt="Correo" className="imgIcon"/></a></td>
                <td className=""><p><a href="https://github.com/JuanMorales23" target="_blank">JuanMorales23</a></p></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Fecha / Lugar de nacimiento</h3>
          <ul>
            <li className="dotHide">
              <p>11/23/1997</p>
            </li>
            <li className="dotHide">
              <p>Caldas - Antioquia</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Habilidades</h3>
          <ul>
            <li>
              Conocimiento en lenguajes de programación orientados a objetos
            </li>
            <li>Trabajo y apoyo junto al equipo.</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Habilidades Técnicas</h3>
          <ul>
            <li className="dotHide">
              <p>Java</p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                </div>
              </div>
            </li>
            <li className="dotHide">
              <p>PHP</p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                </div>
              </div>
            </li>
            <li className="dotHide"></li>
          </ul>
        </div>
      </div>
      <div className="row align-items-end">
        <div className="col">
          <h3>Idiomas</h3>
          <ul>
            <li>Español (Lengua Nativa)</li>
            <li>Inglés (B1/B2)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
