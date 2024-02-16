import { ALL_COUNTRIES, COUNTRY_BY_ID, FILTER, GET_NAME_COUNTRY, ORDER, STATE_NULL } from "./actions_types";
import axios from "axios";
import { countryFilterByContinent, funcionOrderCountry } from "./utils/utils";

export const allCountries = ()=>{
    return async(dispatch)=>{
        try {
            const { data } = await axios.get('http://localhost:3001/countries');

            return dispatch({
                type:ALL_COUNTRIES,
                payload: data
            })
            
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export const countryById = (id)=>{
    return async(dispatch)=>{
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/${id}`);

            return dispatch({
                type:COUNTRY_BY_ID,
                payload: data
            })
            
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export const getCountryByName = (name)=>{
    return async(dispatch)=>{
        try {
            const { data } = await axios.get(`http://localhost:3001/countries?name=${name}`);

            return dispatch({
                type:GET_NAME_COUNTRY,
                payload: data
            })
            
        } catch (error) {
            alert(`El nombre del pais ${name} no se encuentra en la base de datos, intenta con otro`)
        }
    }
};

export const order = (value)=>{
    return async(dispatch)=>{
        const orderCountries = await funcionOrderCountry(value)
        return dispatch ({ 
            type:ORDER, 
            payload:orderCountries
        })
    }
};

export const filter = (value)=>{
    return async(dispatch)=>{
        const filterCountries = await countryFilterByContinent(value)
        return dispatch ({ 
            type:FILTER, 
            payload:filterCountries
        })
    }
};

export const stateNull = ()=>{
    return (dispatch)=>{
        return dispatch({
            type:STATE_NULL,
            payload:{}
        })
    }
};