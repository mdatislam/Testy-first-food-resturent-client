import { addFood } from "../actions/filterAction"

export const addFoodItem = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/food", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(product)
        })
        const data = await res.json()
        if (data.acknowledged) {
            dispatch(addFood({
                _id: data.insertedId,
                ...product
            }))
        }
    }
}