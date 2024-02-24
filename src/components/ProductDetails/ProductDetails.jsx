import React, { useContext, useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { cartContext } from '../../Context/cartContext'
import Loading from '../Loading/Loading'
export default function ProductDetails() {
    let {counter,setCounter}=useContext(cartContext)
    let x = useParams ()
let[product , setProduct]=useState({})
let[loading,setLoaging]=useState(true)

async function getProduct(){
    let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)
    setProduct(data.data)
      setLoaging(false)
}
useEffect(()=>{
    getProduct()
},[])
if(loading)return<Loading/>
    return (
        <div>
        <div className='container my-5'>
        <div className='row mt-5'>
            <div className='col-md-3'>
                <img src={product.imageCover} className='w-100' alt="" />
            </div>
            <div className='col-md-9'>
                <h4>{product.title}</h4>
                <p className='my-3'>{product.description}</p>
                <span className='text-main'>{product.category.name}</span>
                <div className='d-flex justify-content-between my-4'>
                    <div>
                    <div>
                        <p>{product.price} EGP</p>
                    </div>
                    </div>
                    <div>
                    <i className="fa-solid fa-star rating-color"></i>
                    {product.retingsAverage}
                </div>
                </div>
                <button onClick={() => setCounter(counter+1)}className='btn bg-main text-white w-100'>Add To Cart</button>
            </div>
        </div>
        </div>
        </div>
    )}

