import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateFoodItem } from '../../redux/Thunk/updateFoodItem';

const UpdateProduct = ({ editProducts, setProduct }) => {
    const dispatch=useDispatch()
    

    const { _id, name, category, price ,image} = editProducts
    // console.log(name);

    const { register, handleSubmit,reset } = useForm();

    const submit = (data) => {
        const product = {
            name: data.model || name,
            image:data.image || image, 
            category: data.brand || category,
            status: data.status === "true" ? true : false,
            price: data.price || price,
            keyFeature: [
                data.keyFeature1,
                data.keyFeature2,
                data.keyFeature3,
                data.keyFeature4,
            ],

        };

        //console.log(product);
        dispatch(updateFoodItem({product,_id}))
        setProduct(null)
        //reset()
       
    };

    return (
        <div className='flex justify-center items-center h-full '>
            <dialog id="editProduct" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                        onSubmit={handleSubmit(submit)}>
                                               
                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-2' htmlFor='model'>
                                Name
                            </label>
                            <input type='text' defaultValue={name} id='model' {...register("model")} />
                        </div>
                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-2' htmlFor='image'>
                                Image
                            </label>
                            <input type='text' name='image' id='image' {...register("image")} />
                        </div>

                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-3' htmlFor='brand'>
                                Category
                            </label>
                           
                            <input type='text' defaultValue={category} name='brand' id='brand' {...register("brand")} />
                        </div>
                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-2' htmlFor='price'>
                                price
                            </label>
                            <input type='text' defaultValue={price} name='price' id='price' {...register("price")} />
                        </div>

                        <div className='flex flex-col w-full max-w-xs'>
                            <h1 className='mb-3'>Availability</h1>
                            <div className='flex gap-3'>
                                <div>
                                    <input
                                        type='radio'
                                        id='available'
                                        value={true}
                                        {...register("status")}
                                    />
                                    <label className='ml-2 text-lg' htmlFor='available'>
                                        Available
                                    </label>
                                </div>
                                <div>
                                    <input
                                        type='radio'
                                        id='stockOut'
                                        name='status'
                                        value={false}
                                        {...register("status")}
                                    />
                                    <label className='ml-2 text-lg' htmlFor='stockOut'>
                                        Stock out
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-full max-w-xs'></div>
                        <div className='flex flex-col w-full max-w-xs'>
                            <label className='mb-2' htmlFor='keyFeature1'>
                                Key Feature 1
                            </label>
                            <input
                                type='text'
                                name='keyFeature1'
                                id='keyFeature1'
                                {...register("keyFeature1")}
                            />
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <button
                                className=' px-4 mt-3 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                                type='submit'
                            >
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
                </dialog> 
        </div>
    );
};

export default UpdateProduct;