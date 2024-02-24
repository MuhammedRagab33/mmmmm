
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import axios from 'axios'
export default function Categories() {

    let[categories,setCategories]=useState([])
    let[loading,setLoaging]=useState(true)
    async function getCategories(){
        let{data}=await axios.get('https://ecommerce.routemisr.com/api/v1/categories/')
    setCategories(data.data)
    console.log(data)
        setLoaging(false)
    }
    useEffect(()=>{
    getCategories()
    },[])
    if(loading)return<Loading/>

    return (
        <>
        <div className='container my-5'>
        <div className='row'>
        {categories.map(item=>{
            return  <div className='col-md-4'>
            <div className='product cursor-pointer rounded-3 p-3'>
            <img src={item.image} className='w-100' alt="" />
            <h4>{item.name}</h4>
            </div>
        </div>
        })}
        </div>
        </div>
        </>
    )
}