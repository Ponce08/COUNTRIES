import { ALL_COUNTRIES, COUNTRY_BY_ID, FILTER, GET_NAME_COUNTRY, ORDER, POST_ACTIVITY, STATE_NULL } from "./actions_types";

const initialState = {
    allCountries:[],
    countryID:{},
    postActivities:[]
}

const reducer =(state=initialState, action)=>{
    switch(action.type){
        
        case ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            };

        case COUNTRY_BY_ID:
            return {
                ...state,
                countryID: action.payload
            };

        case STATE_NULL:
            return {
                ...state,
                countryID:action.payload
            };

        case GET_NAME_COUNTRY:
            return {
                ...state,
                allCountries:action.payload
            };
        case ORDER:
            return{
                ...state,
                allCountries:action.payload
            };

        case FILTER:
            return{
                ...state,
                allCountries:action.payload
            };

        case POST_ACTIVITY:
            state.postActivities.push(action.payload)
            return {
                 ...state,
                postActivities:[...state.postActivities]
            };

        default:
            return{
                ...state
            }
        }
};

export default reducer;
