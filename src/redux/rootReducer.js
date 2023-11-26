import {combineReducers} from 'redux'
import { filterReducer } from './reducers/filterReducer'
import productReducer from './reducers/productReducer'

const rootReducer= combineReducers({
    product: productReducer,
    filter:filterReducer
})
export default rootReducer