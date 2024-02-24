import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import axios from 'axios'
export default function Brands() {

    let[brands,setBrands]=useState([])
    let[loading,setLoaging]=useState(true)
    async function getbrands(){
        let{data}=await axios.get('https://ecommerce.routemisr.com/api/v1/brands/')
    setBrands(data.data)
    console.log(data)
        setLoaging(false)
    }
    useEffect(()=>{
    getbrands()
    },[])
    if(loading)return<Loading/>

    return (
        <>
        <div className='container my-5'>
        <div className='row'>
        {brands.map(item=>{
            return  <div className='col-md-3'>
            <div className='product cursor-pointer rounded-3 p-3'>
            <img src={item.image} className='w-100' alt="" />
        <span className='text-main'>{item.name}</span>
        <h5 className='my-2 fw-bold'>{item.slug}</h5>
            </div>
        </div>
        })}
        </div>
        </div>
        </>
    )
}
