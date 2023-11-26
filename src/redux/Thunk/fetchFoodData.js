import { loaded } from "../actions/productAction"

const loadFoodData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/food")
        const data = await res.json()
        if (data.length) {
            dispatch(loaded(data))
        }

    }
}

export default loadFoodData