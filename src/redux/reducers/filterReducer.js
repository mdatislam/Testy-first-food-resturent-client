import { SEARCH, TOGGLE_CATEGORY, TOGGLE_CLEAR, TOGGLE_STOCK } from "../actionTypes/actionTypes"

export const initialState={
    filters:{
        category:[],
        stock:false
    },
    keyWords:""
}

export const filterReducer=(state=initialState,action)=>{
    switch (action.type){
        case TOGGLE_CATEGORY:
            if(!state.filters.category.includes(action.payload)){
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        category:[...state.filters.category,action.payload]
                    }
    
                }
            } else{
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        category:state.filters.category.filter(x=>x!==action.payload)
                    }
    
                }

            }
            case TOGGLE_STOCK:
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        stock: !state.filters.stock
                    }

                }
                case TOGGLE_CLEAR:
                    return{
                        ...state,
                        filters:{
                            ...state.filters,
                            category:action.payload
                        }
    
                    }

                    case SEARCH:
                        return {
                            ...state,
                            ...state.filters,
                            keyWords:action.payload
                        }
            default:
                return state
    }
   
}