import React, { useEffect, useState } from "react";
import loadFoodData from "../../redux/Thunk/fetchFoodData";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFoodItem } from "../../redux/Thunk/removeFoodItem";
import UpdateProduct from "./UpdateProduct";



const ProductList = () => {
  const [editProducts, setProduct] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadFoodData())
  },[]);
  const products = useSelector(state => state.product.products)
  //console.log(products);
  return (
    <div>
      <div class='flex flex-col justify-center items-center h-full w-full '>
        <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
          <header class='px-5 py-4 border-b border-gray-100'>
            <div class='font-semibold text-gray-800'>Food Items: {products.length}</div>
          </header>

          <div class='overflow-x-auto p-3'>
            <table class='table-auto w-full'>
              <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                <tr>
                  <th></th>
                  <th class='p-2'>
                    <div class='font-semibold text-left'> Name</div>
                  </th>
                  <th class='p-2'>
                    <div class='font-semibold text-left'>category</div>
                  </th>
                  <th class='p-2'>
                    <div class='font-semibold text-left'>Stock Staus</div>
                  </th>
                  <th class='p-2'>
                    <div class='font-semibold text-left'>Price</div>
                  </th>
                  <th class='p-2'>
                    <div class='font-semibold text-center'>Action</div>
                  </th>
                </tr>
              </thead>

              <tbody class='text-sm divide-y divide-gray-100'>
                {products.map(({ name, category, price, status, _id,image }) => (
                  <tr>
                    <td class='p-2'>
                      <input type='checkbox' class='w-5 h-5' value='id-1' />
                    </td>
                    <td class='p-2'>
                      <div class='font-medium text-gray-800'>{name}</div>
                    </td>
                    <td class='p-2'>
                      <div class='text-left capitalize'>{category}</div>
                    </td>
                    <td class='p-2'>
                      <div class='text-left'>
                        {status ? (
                          <p className='text-green-500 font-medium'>Available</p>
                        ) : (
                          <p className='text-red-500 font-medium'>Stock out</p>
                        )}
                      </div>
                    </td>
                    <td class='p-2'>
                      <div class='text-left font-medium text-indigo-500'>
                        {price}
                      </div>
                    </td>
                    <td class='p-2'>
                      <div class='flex justify-center'>
                        <button  onClick={() => document.getElementById('editProduct').showModal(setProduct({ name, category, price, status, _id,image }))}>
                          <CiEdit className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1" />
                        </button>

                        <button onClick={() => dispatch(removeFoodItem(_id))}>

                        <RiDeleteBin6Line className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"/>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
      {
        editProducts && <UpdateProduct editProducts={editProducts} setProduct={setProduct} />
      }
    </div>

  );
};



export default ProductList;
