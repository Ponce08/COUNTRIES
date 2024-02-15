import './navegation.css'

const Navegation =({find_By_name, crear_actividad, ordenar, filtrar})=>{
    return(
        <div className='content_nav'>
            {crear_actividad}
            {ordenar}
            {filtrar}
           {find_By_name}
        </div>
    )
};

export default Navegation;