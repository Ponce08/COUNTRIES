import { ALL_COUNTRIES, COUNTRY_BY_ID, FILTER, GET_NAME_COUNTRY, ORDER, POST_ACTIVITY, STATE_NULL } from "./actions_types";

const initialState = {
    countries:[],
    countryID:{},
    postActivity:[]
}

const reducer =(state=initialState, action)=>{
    switch(action.type){
        
        case ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
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
                countries:action.payload
            };
        case ORDER:
            return{
                ...state,
                countries:action.payload
            };

        case FILTER:
            return{
                ...state,
                countries:action.payload
            };

        case POST_ACTIVITY:
            state.postActivity.push(action.payload)
            return {
                 ...state,
                postActivity:[...state.postActivity]
            };

        default:
            return{
                ...state
            }
        }
};

export default reducer;
