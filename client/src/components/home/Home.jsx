import './home.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { allCountries, filter, getCountryByName, order } from '../../ridux/actions';
import Countries from '../countries/Countries';
import Navegation from '../navegation/Navegation';

const Home = ()=>{

    const { countries } = useSelector((state)=>state);
    const dispatch = useDispatch();

    const [inicio, setInicio] = useState(0);
    const [final, setFinal] = useState(10);
    const [numeberPage, setNumberPage] = useState(1);
    const [numeberPage2, setNumberPage2] = useState(2);
    const [nameCountry, setNameCountry] = useState('');

            // Control paginado
let countriesAll = countries.slice(inicio, final)
    const previous_page = ()=>{
            if(inicio > 0){
                setInicio(inicio - 10);
                setFinal(final - 10);
                setNumberPage2(numeberPage2 - 1)
                setNumberPage(numeberPage - 1)
                countriesAll = countries.slice(inicio, final);
            }
        };

        const next_page = ()=>{
            if(final < 251){
                setInicio(inicio + 10);
                setFinal(final + 10);
                setNumberPage2(numeberPage2 + 1)
                setNumberPage(numeberPage + 1)
                countriesAll = countries.slice(inicio, final);
            }
        };

            // Orden y filtrados
        const handleChange = (event)=>{
            setNameCountry(event.target.value)
        }

        const handleInput = ()=>{
            dispatch(getCountryByName(nameCountry))
            setNameCountry('')
        }

        const handleOrder = (event)=>{
            dispatch(order(event.target.value))
          };

        const handleFilter = (event)=>{
            dispatch(filter(event.target.value))
          };

    useEffect(()=>{
        dispatch(allCountries())
    }, []);

    return(
        <div>
            <Navegation
                find_By_name={<div className='content_buscar'>
                                <button onClick={handleInput}>Buscar</button>
                                <input type="text" value={nameCountry} onChange={handleChange}/>
                              </div>}

                crear_actividad={ <div className='content_crear_actividad'>
                                    <Link to={'/crear_actividad'}>
                                        <button>Crear Actividad Turistica</button>
                                    </Link>
                                  </div>}

                ordenar={    <div className='content_ordenar'>
                                <label>Ordenar</label>
                                    <select onChange={handleOrder}>
                                        <option value="Todos">Todos</option>
                                        <option value="Mayor Poblacion">Mayor Poblacion</option>
                                        <option value="Menor Poblacion">Menor Poblacion</option>
                                        <option value="De la A-Z">De la A-Z</option>
                                    </select>
                            </div>}
                filtrar={    <div className='content_filtrar'>
                                <label>Filtrar Por Continente</label>
                                    <select onChange={handleFilter}>
                                        <option value="Todos">Todos</option>
                                        <option value="America del Norte">America del Norte</option>
                                        <option value="America del Sur">America del Sur</option>
                                        <option value="Europa">Europa</option>
                                        <option value="Asia">Asia</option>
                                        <option value="Africa">Africa</option>
                                        <option value="Oceania">Oceania</option>
                                        <option value="Antartida">Antartida</option>
                                    </select>
                            </div>}
            />
            <div className='content_countries'>
                {
                    countriesAll.map((country)=>{
                        return <Countries
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        flag={country.flag}
                        continents={country.continents}
                        />
                    })
                }
            </div>
            <div>
                {
                    countriesAll.length > 1 
                    ? <div className="cont_button">
                        <button className='button_home' onClick={previous_page}>{numeberPage}</button> <button className='button_home' onClick={next_page}>{numeberPage2}</button>
                      </div> 

                    : <div className="cont_button">
                        <button className='boton_atras' onClick={()=>dispatch(allCountries())}>Atras</button>
                      </div>
                }
            </div>
        </div>
    )
};

export default Home;