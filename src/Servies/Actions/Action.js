import {add_to_cart} from "../Constant"
export const addtocart=(data)=>{
    console.warn("action",data)
return{
    type:add_to_cart,
    data:data
}
}
export const removetocart=(data)=>{
    return{
        type:"Remove_to_cart",
        data:data
    }
    }