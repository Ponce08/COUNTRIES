import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';
import fondo_detail from './fondo_detail.jpg';
import { countryById, stateNull } from '../../ridux/actions';

const Detail = () => {
  const { countryID } = useSelector((state) => state);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(countryById(params.id));
    return () => dispatch(stateNull());
  }, [params.id]);

  return (
    <div className="content_detail">
      <div className="img_flag">
        <img src={countryID?.flag} alt={countryID?.name} />
      </div>
      <div className="content_date">
        <div>
          <h3>
            ID: <h3>{countryID?.id}</h3>
          </h3>
          <h3>
            NOMBRE: <h3>{countryID?.name?.toUpperCase()}</h3>
          </h3>
          <h3>
            CONTINENTE:{' '}
            {countryID?.continents?.map((cont, i) => (
              <h4 key={i}>{cont}</h4>
            ))}
          </h3>
          <h3>
            CAPITAL:{' '}
            {countryID?.capital?.map((cap, i) => (
              <h4 key={i}>{cap}</h4>
            ))}
          </h3>
        </div>
        <div>
          <h3>
            SUBREGION: <h4>{countryID?.subregion}</h4>
          </h3>
          <h3>
            AREA: <h4>{countryID?.area}</h4>
          </h3>
          <h3>
            POBLACION: <h4>{countryID?.population}</h4>
          </h3>
        </div>
      </div>
      <div className="img_detail">
        <img src={fondo_detail} alt="fondo_detail" />
      </div>
    </div>
  );
};

export default Detail;
