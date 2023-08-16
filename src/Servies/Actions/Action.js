import {add_to_cart} from "../Constant"
export const addtocart=(data)=>{
return{
    type:add_to_cart,
    data:data
}
}