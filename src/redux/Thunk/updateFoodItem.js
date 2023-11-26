import { updateProduct } from "../actions/updateProduct"

export const updateFoodItem=({product,_id})=>{
    console.log(_id);
    return async(dispatch,getState)=>{
        const res= await fetch( `http://localhost:5000/food/${_id}`,{
            method:"PUT", 
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(product)
        })
        const data= await res.json()
        if(data.acknowledged){
            dispatch(updateProduct({product,_id}))
        }
    }
}