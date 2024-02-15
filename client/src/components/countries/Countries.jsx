import { Link } from 'react-router-dom';
import './countries.css';

const Countries = ({ id, name, flag, continents })=>{
    return(
        <div className="content_country">
            <h3 className='titulo_country'>{name.toUpperCase()}</h3>
            <div className='content_image'>
                <Link to={`/detail/${id}`}>
                    <img src={flag} alt={name} className="image_country"/>
                </Link>
            </div>
            <div className='content_continente'>
                <h4 className='titulo_continente'>CONTINENTE: {continents.map((cont, i)=><h5 key={i}>{cont}</h5>)}</h4>
            </div>
        </div>
    )
};

export default Countries;