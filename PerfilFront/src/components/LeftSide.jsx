import React from "react";
import gmail from "../assets/img/icons8-gmail-48.png";
import phone from "../assets/img/icons8-whatsapp-48.png";
import facebook from "../assets/img/icons8-facebook-48.png";
import linkedin from "../assets/img/icons8-linkedin-48.png";
import github from "../assets/img/icons8-github-48.png";

const LeftSide = () => {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col">
          <h3>Información de contacto</h3>
          <div className="table-responsive">
            <table className="table">
              <tr>
                <td className="tdIcon py-0">
                  <a href="https://api.whatsapp.com/send?phone=573105300721">
                    <img src={phone} alt="Whatsapp" className="imgIcon" />
                  </a>
                </td>
                <td className="">
                  <p>
                    <a href="https://api.whatsapp.com/send?phone=573105300721">
                      +57 310-530-0721
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="tdIcon py-0">
                  <a href="mailto:juanmr2311@gmail.com" target="_blank">
                    <img src={gmail} alt="Correo" className="imgIcon" />
                  </a>
                </td>
                <td className="">
                  <p>
                    <a href="mailto:juanmr2311@gmail.com" target="_blank">
                      juanmr2311@gmail.com
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="tdIcon py-0">
                  <a
                    href="https://www.facebook.com/juan.moralesrios.23"
                    target="_blank"
                  >
                    <img src={facebook} alt="Facebook" className="imgIcon" />
                  </a>
                </td>
                <td className="">
                  <p>
                    <a
                      href="https://www.facebook.com/juan.moralesrios.23"
                      target="_blank"
                    >
                      Juan Esteban Morales Rios
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="tdIcon py-0">
                  <a
                    href="https://www.linkedin.com/in/juan-esteban-morales-rios-52614b217/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="Correo" className="imgIcon" />
                  </a>
                </td>
                <td className="py-0">
                  <p>
                    <a
                      href="https://www.linkedin.com/in/juan-esteban-morales-rios-52614b217/"
                      target="_blank"
                    >
                      https://www.linkedin.com/in/juan-esteban-morales-rios-52614b217/
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td className="tdIcon py-0">
                  <a href="https://github.com/JuanMorales23" target="_blank">
                    <img src={github} alt="Correo" className="imgIcon" />
                  </a>
                </td>
                <td className="">
                  <p>
                    <a href="https://github.com/JuanMorales23" target="_blank">
                      JuanMorales23
                    </a>
                  </p>
                </td>
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
          <h3>Competencias</h3>
          <ul>
            <li>
              <p>Trabajo y apoyo en equipo</p>
            </li>
            <li><p>Respetuoso y responsable</p></li>
            <li><p>Abierto al aprendizaje y retroalimentaciones</p></li>
            <li><p>Comprometido con lo que hago y me apasiona</p></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Habilidades Técnicas</h3>
          <ul>
            <li className="dotHide">
              <p>
                <b>Java</b>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li className="dotHide">
              <p>
                <b>Php</b>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li className="dotHide">
              <p>
                <b>Python</b>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li className="dotHide">
              <p>
                <b>Html</b>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li className="dotHide">
              <p>
                <b>Css</b>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li className="dotHide">
              <p>
                <b>JavaScript</b>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li className="dotHide">
              <p>
                <b>Git/GitHub</b>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li className="dotHide">
              <p>
                <b>MySQL/Oracle Database</b>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
            <li className="dotHide">
              <p>
                <b>MongoDB</b>
              </p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </li>
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
