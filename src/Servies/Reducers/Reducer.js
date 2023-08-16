import { add_to_cart } from "../Constant";

const initialstate={
    carddata:[]
}
export default function carditem(state=initialstate,action)
{
switch(action.type){
    case add_to_cart:
        console.warn("Reducer",action)
        return{
            ...state,
            carddata: action.data
        }
        break;
    default:
        return state
}
}