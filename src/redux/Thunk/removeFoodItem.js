import { removeProduct } from "../actions/productAction"

export const removeFoodItem=(id)=>{
        return async(dispatch,getState)=>{
        const res = await fetch(`http://localhost:5000/food/${id}`,{
            method:"DELETE",
            headers:{
                'content-type':"application/json"
            },

        })
        const data = await res.json()
        //console.log(data);
        if(data.deletedCount){
           
            dispatch(removeProduct(id))
        }
    }
}