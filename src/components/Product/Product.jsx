import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/cartContext'
import { toast } from 'react-toastify' 

export default function Product({item}) {
    let{counter,setCounter ,addToCart}=useContext(cartContext)
    let[bntLoading,setBntLoading]= useState (true)
    async function addProductToCart(productId){
        setBntLoading(false)
    let data = await addToCart(productId)
    console.log(data)
    if(data.status=='success'){
        setBntLoading(true)
    setCounter(data.numOfCartItems)
        toast.success("prduct added succesfully")
    }
    }
    return (
        <>
    <div className='col-md-2'>
                <div className='product cursor-pointer rounded-3 p-3'>
                <Link to={'/product-details/'+item._id}>
                <img src={item.imageCover} className='w-100' alt="" />
            <span className='text-main'>{item.category.name}</span>
            <h5 className='my-2 fw-bold'>{item.title.split(' ').slice(0,2).join}</h5>
            <div className='d-flex justify-content-between my-3'>
                <div>
                    {item.price}EGP
                </div>
                <div>
                    <i className="fa-solid fa-star rating-color"></i>
                    {item.retingsAverage}
                </div>
            </div>
                </Link>
            <button disabled={!bntLoading} onClick={() => addProductToCart(item._id)} className='btn bg-main w-100 text-white'>{bntLoading?'Add To Cart':'Loading...'}</button>
                </div>
            </div>
        </>
    )
}
