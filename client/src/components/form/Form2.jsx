import './form2.css';
import fondo_form from './fondo_form.jpg'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { useState} from "react";
import { postActivity } from '../../ridux/actions';

let paises = [];
const Form2 = ()=>{
    
    const { countries } = useSelector((state)=>state);
    const dispatch = useDispatch();
    
    const [ activityData, setActivityData ] = useState({
        name:'',
        dificulty:'',
        duration:'',
        season:'',
        countries:paises
    });
    
    // Control de inputs
    const handleForm = (event)=>{
        setActivityData({
            ...activityData,
            [event.target.name]: event.target.value
        });
    };
    
    const handleChange = (event)=>{
        paises.push(event.target.value)
        setActivityData({
            ...activityData,
            countries:paises
        })
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postActivity(activityData))
        // alert('ACTIVIDAD CREADA CON EXITO')
        setActivityData({
            name:'',
            dificulty:0,
            duration:0,
        })
        paises = []
    };
    
    const bontonX = (country)=>{
        let paisesFilter = paises.filter((p)=>{
                return p !== country
            })
        paises = paisesFilter
        setActivityData({
            ...activityData,
            countries:paises
        })
    } 
            
    return(
        <div className='content_form'>
            <div className='content_h1'>
                <h1>Crear Actividad Turistica</h1>
            </div>
            <form className='content_form2' onSubmit={handleSubmit}>
                <div className='content_data1'>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name" className='input_name' onChange={handleForm}/>
                    <div>
                        <label htmlFor="dificulty" className='label_number1'>Dificultad:</label>
                        <input type="number" name="dificulty" min="0" max="5" className='input_number1' placeholder='0' onChange={handleForm}/>
                    </div>
                    <div>
                        <label htmlFor="duration" className='label_number2'>Duracion(Horas):</label>
                        <input type="number" name="duration" min="0" max="24" className='input_number2' placeholder='0' onChange={handleForm}/>
                    </div>
                </div>
                <div className='content_data2'>
                    <div className='content_temporada'>
                        <label htmlFor="season">Temporarda:</label>
                        <select onChange={handleForm} name='season'>
                            <option value=''>--Seleccione--</option>
                            <option value="Verano">Verano</option>
                            <option value="Invierno">Invierno</option>
                            <option value="Otoño">Otoño</option>
                            <option value="Primavera">Primavera</option>
                        </select>
                    </div>
                    <div className='content_select'>
                        <label htmlFor="">Seleccionar Pais:</label>
                        <select onChange={handleChange} name='countries' className='select_pais'>  
                            <option value='' className='option_select'>--Seleccione--</option>
                            {countries.map((pais)=><option key={pais.id} value={pais.name.toUpperCase()}>{pais.name.toUpperCase()}</option>)}
                        </select>
                        <div  className='span_pais'>
                            {paises.map((country, i)=><div key={i}><span>{country}</span><a key={i} onClick={()=>bontonX(country)}>X</a></div>)}
                        </div>
                    </div>
                    <div className='content_button'>
                        <button>ENVIAR</button><Link to={'/crear_actividad'}><button>CREAR OTRA</button></Link>
                    </div>
                </div>
            </form>
            <div className="img_form">
                <img src={fondo_form} alt="fondo_form" />
            </div>
        </div>
    )
};

export default Form2;