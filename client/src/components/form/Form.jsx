import './form.css';
import fondo_form from './fondo_form.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { postActivity } from '../../ridux/actions';
import { validation } from './validation';

let paises = [];
const Form = () => {
  const { allCountries } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(true);
  const [aux2, setAux2] = useState(false);
  const [aux3, setAux3] = useState(false);

  const [activityData, setActivityData] = useState({
    name: '',
    dificulty: '',
    duration: '',
    season: '',
    countries: paises
  });

  // Control de inputs
  const handleForm = (event) => {
    setActivityData({
      ...activityData,
      [event.target.name]: event.target.value
    });
    setAux3(true);
  };

  const handleChange = (event) => {
    if (event.target.value !== '') {
      paises.push(event.target.value);
      setActivityData({
        ...activityData,
        countries: paises
      });
    } else {
      setActivityData({
        ...activityData,
        countries: []
      });
      paises = [];
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivity(activityData));
    setActivityData({
      name: '',
      dificulty: '',
      duration: '',
      season: '',
      countries: []
    });
    setAux(false);
    paises = [];
  };

  const bontonX = (country) => {
    let paisesFilter = paises.filter((p) => {
      return p !== country;
    });
    paises = paisesFilter;
    setActivityData({
      ...activityData,
      countries: paises
    });
    setAux2(true);
  };

  const { name, dificulty, duration, season, countries } = validation(activityData);

  return (
    <div>
      {aux ? (
        <div className="content_form">
          <div className="content_h1">
            <h1>Crear Actividad Turistica</h1>
          </div>

          <form className="content_form2" onSubmit={handleSubmit}>
            <div className="content_data1">
              <label htmlFor="name">Nombre:</label>
              <input type="text" name="name" className="input_name" onChange={handleForm} />
              {aux3 ? (
                <div className="cont-p">
                  <p>{name}</p>
                </div>
              ) : (
                <div className="cont-p">
                  <p></p>
                </div>
              )}
              <div>
                <label htmlFor="dificulty" className="label_number1">
                  Dificultad:
                </label>
                <input type="number" name="dificulty" min="0" className="input_number1" placeholder="0" onChange={handleForm} />
                {activityData.dificulty !== '' ? (
                  <div className="cont-p">
                    <p>{dificulty}</p>
                  </div>
                ) : (
                  <div className="cont-p">
                    <p></p>
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="duration" className="label_number2">
                  Duracion(Horas):
                </label>
                <input type="number" name="duration" min="0" className="input_number2" placeholder="0" onChange={handleForm} />
                {activityData.duration !== '' ? (
                  <div className="cont-p">
                    <p>{duration}</p>
                  </div>
                ) : (
                  <div className="cont-p">
                    <p></p>
                  </div>
                )}
              </div>
            </div>

            <div className="content_data2">
              <div className="content_temporada">
                <label htmlFor="season">Temporarda:</label>
                <select onChange={handleForm} name="season">
                  <option>--Seleccione--</option>
                  <option value="Verano">Verano</option>
                  <option value="Invierno">Invierno</option>
                  <option value="Otoño">Otoño</option>
                  <option value="Primavera">Primavera</option>
                </select>
                {activityData.season !== '' ? (
                  <div className="cont-p">
                    <p>{season}</p>
                  </div>
                ) : (
                  <div className="cont-p">
                    <p></p>
                  </div>
                )}
              </div>
              <div className="content_select">
                <label>Seleccionar Pais:</label>
                <select onChange={handleChange} name="countries" className="select_pais">
                  <option value="" className="option_select">
                    --Seleccione--
                  </option>
                  {allCountries.map((pais) => (
                    <option key={pais.id} value={pais.name.toUpperCase()}>
                      {pais.name.toUpperCase()}
                    </option>
                  ))}
                </select>
                {aux2 ? (
                  <div className="cont-p">
                    <p>{countries}</p>
                  </div>
                ) : (
                  <div className="cont-p">
                    <p></p>
                  </div>
                )}
                <div className="span_pais">
                  {paises.map((country, i) => (
                    <div key={i}>
                      <span>{country}</span>
                      <a key={i} onClick={() => bontonX(country)}>
                        X
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={
                  name ||
                  dificulty ||
                  duration ||
                  season ||
                  countries ||
                  !activityData.name ||
                  !activityData.dificulty ||
                  !activityData.duration ||
                  !activityData.season ||
                  activityData.countries.length === 0
                    ? 'content_button2'
                    : 'content_button'
                }
              >
                <button
                  type="submit"
                  disabled={
                    name ||
                    dificulty ||
                    duration ||
                    season ||
                    countries ||
                    !activityData.name ||
                    !activityData.dificulty ||
                    !activityData.duration ||
                    !activityData.season ||
                    activityData.countries.length === 0
                  }
                >
                  ENVIAR
                </button>
                <Link to={'/home'}>
                  <button className="boton_home_form">Home</button>
                </Link>
              </div>
            </div>
          </form>

          <div className="img_form">
            <img src={fondo_form} alt="fondo_form" />
          </div>
        </div>
      ) : (
        <div>
          <div className="content_actividad_creada">
            <h1>Actividad creada con Exito✅</h1>
            <div className="content_button">
              <button onClick={() => setAux(true)}>Crear Otra</button>
              <Link to={'/home'}>
                <button>Home</button>
              </Link>
            </div>
          </div>
          <div className="img_form">
            <img src={fondo_form} alt="fondo_form" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
