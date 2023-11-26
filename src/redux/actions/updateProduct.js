import { UPDATE_PRODUCT } from "../actionTypes/actionTypes";

export const updateProduct=({product,_id})=>{
    return {
        type:UPDATE_PRODUCT,
        id:_id,
        payload:product
    }

}