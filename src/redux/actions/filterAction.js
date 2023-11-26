import { ADD_DATA, SEARCH, TOGGLE_CATEGORY, TOGGLE_CLEAR, TOGGLE_STOCK } from "../actionTypes/actionTypes"

export const actionCategory = (category) => {
    return {
        type: TOGGLE_CATEGORY,
        payload: category
    }
}

export const actionStock = () => {
    return {
        type: TOGGLE_STOCK,

    }
}

export const actionClear = () => {
    return {
        type: TOGGLE_CLEAR,
        payload: ""
    }

}

export const addFood = (product) => {
    return {
        type: ADD_DATA,
        payload: product

    }
}

export const actionSearch = (searchWord) => {
    return {
        type: SEARCH,
        payload: searchWord
    }
}