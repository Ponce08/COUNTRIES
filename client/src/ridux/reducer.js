import { ALL_COUNTRIES } from "./actions_types";

const initialState = {
    countries:[]
}


const reducer =(state=initialState, action)=>{
    switch(action.type){
        case ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };

        default:
            return{
                ...state
            }
        }
};

export default reducer;
