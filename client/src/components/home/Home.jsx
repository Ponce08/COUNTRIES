import './home.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { allCountries } from '../../ridux/actions';
import Countries from '../countries/Countries';
import Navegation from '../navegation/Navegation';

const Home = ()=>{

    const { countries } = useSelector((state)=>state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(allCountries())
    }, []);

    return(
        <div>
            <Navegation
                find_By_name={<div>
                                <button>Buscar</button>
                                <input type="text" />
                            </div>}
            />

            <div className='content_countries'>
                {
                    countries.map((country)=>{
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

        </div>
    )
};

export default Home;