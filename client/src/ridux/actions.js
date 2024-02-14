import { ALL_COUNTRIES } from "./actions_types";
import axios from "axios";

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