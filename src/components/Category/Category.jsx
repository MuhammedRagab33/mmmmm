import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
export default function Category() {
const[Category,setCategory] =useState([]);
async function getCatetgory(){
    let {data} =await axios.get('https://ecommerce.routemisr.com/api/v1/categories/')
    setCategory(data.data)
}
useEffect(()=>{ 
getCatetgory()
},[])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:600,
        arrows:false,
    };
    return (
        <div className='my-4 contiainer'>
        <h3>Shop Popule Categories</h3>
        <Slider {...settings}>
    { 
    Category.map((item)=>(
    <div className='mx-3 px-1'>
    <img src={item.image} height={200} className='w-100' alt="" />
    <h4>{item.name}</h4>
    </div>
    ))
    }
    </Slider>
        </div>
    )
}