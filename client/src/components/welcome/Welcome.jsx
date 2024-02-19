import './welcome.css';
import fondo_welcome from './banderas-del-mundo-tapa.jpg'
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { allCountries } from '../../ridux/actions';

const Welcome = ()=>{

    const dispatch = useDispatch();

    const addCountriesBDD = async()=>{
        try {
            await axios.post('http://localhost:3001/countries/add')
        } catch (error) {
            throw Error(error.message)
        }
    };
    
    useEffect(()=>{
        addCountriesBDD()
    }, []);

    return(
        <div className='content_welcome'>
            <div className='content_titulo_button'>
                <h1 className='titulo_welcome'>Bienvenidos</h1>
                <Link to={'/home'}>
                    <button className='button_welcome' onClick={()=>dispatch(allCountries())}>Empezar</button>
                </Link>
            </div>
            <div className='content_fondo'>
                <img src={fondo_welcome} alt="banderas-del-mundo-tapa.jpg"/>
            </div>
        </div>
    )
};

export default Welcome;