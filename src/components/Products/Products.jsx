import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../Product/Product'
import Loading from '../Loading/Loading'
export default function Products() {
    let[products,setProducts]=useState([])
    let[loading,setLoaging]=useState(true)
    async function getproducts(){
        let{data}=await axios.get('https://ecommerce.routemisr.com/api/v1/products/')
    setProducts(data.data)
        setLoaging(false)
    }
    useEffect(()=>{
    getproducts()
    },[])
    if(loading)return<Loading/>
    return (
        <>
        <div className='container my-5'>
        <div className='row'>
        {products.map(item=>{
            return<Product item={item} key={item._id}/>
        })}
        </div>
        </div>
        </>
    )
}
