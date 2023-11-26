import { useNavigate } from "react-router-dom";
import EditProduct from "../../pages/Dashboard/EditProduct";

import {
  ADD_DATA,
  ADD_PRODUCT,
  ADD_TO_CART,
  LOAD_DATA,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actionTypes/actionTypes";

const initialState = {
  cart: [],
  products: [],
};

const productReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );

  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        products: action.payload
      }
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case ADD_DATA:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT:
      //console.log(action.payload);
      return {
        ...state,
        products: state.products.filter(product =>
          product._id !== action.payload)

      }

    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );

        selectedProduct.quantity = selectedProduct.quantity + 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;

        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };

    case UPDATE_PRODUCT:
      const newProduct= state.products.filter(product=> product._id !== action.id)
      console.log(newProduct,action.id);
      return {
        ...state,
        products:[...newProduct,action.payload]
      }


    default:
      return state;
  }
};

export default productReducer;
