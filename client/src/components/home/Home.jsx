import './home.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { all_Countries, getCountryByName, orderAndFilterCountry } from '../../ridux/actions';
import Countries from '../countries/Countries';
import Navegation from '../navegation/Navegation';

const Home = () => {
  const { allCountries } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [inicio, setInicio] = useState(0);
  const [final, setFinal] = useState(10);
  const [nameCountry, setNameCountry] = useState('');

  // Control paginado
  let countriesAll = allCountries.slice(inicio, final);
  const previous_page = () => {
    if (inicio > 0) {
      setInicio(inicio - 10);
      setFinal(final - 10);
      countriesAll = allCountries.slice(inicio, final);
    }
  };

  const next_page = () => {
    if (final < 251) {
      setInicio(inicio + 10);
      setFinal(final + 10);
      countriesAll = allCountries.slice(inicio, final);
    }
  };

  // Buscar por nombre
  const handleInput = () => {
    setNameCountry('');
    setInicio(0);
    setFinal(10);
  };

  // Orden y Filtrado
  const handleOrderAndFilter = (event) => {
    dispatch(orderAndFilterCountry(event.target.value));
    event.target.value = '';
    setInicio(0);
    setFinal(10);
  };

  return (
    <div>
      <Navegation
        find_By_name={
          <div className="content_buscar">
            <button onClick={handleInput}>Buscar</button>
            <input
              type="text"
              value={nameCountry}
              onChange={(event) => {
                setNameCountry(event.target.value), dispatch(getCountryByName(nameCountry));
              }}
            />
          </div>
        }
        crear_actividad={
          <div className="content_crear_actividad">
            <Link to={'/crear_actividad'}>
              <button
                onClick={() => {
                  dispatch(all_Countries());
                }}
              >
                Crear Actividad Turistica
              </button>
            </Link>
          </div>
        }
        ordenar={
          <div className="content_ordenar">
            <label>Ordenar</label>
            <select onChange={handleOrderAndFilter}>
              <option value="Todos">Todos</option>
              <option value="Mayor Poblacion">Mayor Poblacion</option>
              <option value="Menor Poblacion">Menor Poblacion</option>
              <option value="De la A-Z">De la A-Z</option>
            </select>
          </div>
        }
        filtrar={
          <div className="content_filtrar">
            <label>Filtrar</label>
            <select onChange={handleOrderAndFilter}>
              <optgroup label="Por Continente:">
                <option value="Todos">Todos</option>
                <option value="North America">America del Norte</option>
                <option value="South America">America del Sur</option>
                <option value="Europe">Europa</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctica">Antartida</option>
              </optgroup>
              <optgroup label="Por Actividad:">
                <option value="Verano">Verano</option>
                <option value="Invierno">Invierno</option>
                <option value="Otoño">Otoño</option>
                <option value="Primavera">Primavera</option>
              </optgroup>
            </select>
          </div>
        }
      />
      <div className="content_countries">
        {countriesAll.map((country) => {
          return (
            <Countries key={country.id} id={country.id} name={country.name} flag={country.flag} continents={country.continents} />
          );
        })}
      </div>
      <div>
        {countriesAll.length > 1 ? (
          <div className={inicio === 0 ? 'cont_button' : 'cont_button2'}>
            <button className="button_home1" onClick={previous_page}>
              Prev
            </button>{' '}
            <button className="button_home2" onClick={next_page}>
              Next
            </button>
          </div>
        ) : (
          <div className={countriesAll.length === 0 && inicio === 0 ? 'cont_button3' : 'cont_button'}>
            <div>
              <h1> Ops!! No encontramos lo que solicitaste 😅</h1>
            </div>
            <button
              className="boton_atras"
              onClick={() => {
                dispatch(all_Countries());
                setInicio(0);
                setFinal(10);
              }}
            >
              Atras
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
