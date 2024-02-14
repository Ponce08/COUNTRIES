import { Link } from 'react-router-dom';
import './countries.css';

const Countries = ({ id, name, flag, continents })=>{
    return(
        <div className="content_country">
            <h3 className='titulo_country'>{name}</h3>
            <Link to={`/detail/${id}`}>
                <img src={flag} alt={name} className="image_country"/>
            </Link>
            <div className='content_continente'>
                <span className='titulo_continente'>CONTINENTE: {continents.map((cont, i)=><h3 key={i}>{cont}</h3>)}</span>
            </div>
        </div>
    )
};

export default Countries;