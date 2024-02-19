import './form.css';
import fondo_form from './fondo_form.jpg'
import { useSelector } from "react-redux";
import { useState} from "react";

const Form = ()=>{

    const { countries } = useSelector((state)=>state);
    const [pais, setPais] = useState([]);

    const handleChange = (event)=>{
        setPais((paises)=> [...paises, event.target.value])
    }

    return(
        <div className='content_form'>
            <div className='content_h1'>
                <h1>Crear Actividad Turistica</h1>
            </div>
            <form className='content_form2'>
                <div className='content_data1'>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name" className='input_name'/>
                    <div>
                        <label htmlFor="dificulty" className='label_number1'>Dificultad:</label>
                        <input type="number" name="dificulty" min="0" max="5" className='input_number1' placeholder='0'/>
                    </div>
                    <div>
                        <label htmlFor="duration" className='label_number2'>Duracion(Horas):</label>
                        <input type="number" name="duration" min="0" max="24" className='input_number2' placeholder='0'/>
                    </div>
                </div>
                <div className='content_data2'>
                    <div className='content_temporada'>
                        <label htmlFor="season">Temporarda:</label>
                        <select>
                            <option value="Verano">Verano</option>
                            <option value="Invierno">Invierno</option>
                            <option value="Otoño">Otoño</option>
                            <option value="Primavera">Primavera</option>
                        </select>
                    </div>
                    <div className='content_select'>
                        <label htmlFor="">Seleccionar Pais:</label>
                        <select onChange={handleChange} className='select_pais'>
                            {countries.map((pais)=><option key={pais.id} value={pais.name.toUpperCase()}>{pais.name.toUpperCase()}</option>)}
                        </select>
                        <div>
                            {pais.map((country, i)=><div className='span_pais'><span key={i}>{country} </span></div>)}
                        </div>
                    </div>
                    <div className='content_button'>
                        <button>SUBMIT</button>
                    </div>
                </div>
            </form>
            <div className="img_form">
                <img src={fondo_form} alt="fondo_form" />
            </div>
        </div>
    )
};

export default Form;