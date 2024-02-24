import React from 'react'
import Slider from "react-slick";
import Slider1 from "../../assets/images/026677f7-a31a-4486-a123-8645cd309933.avif";
import Slider2 from '../../assets/images/37e66105-3708-4226-821f-c27f64cf0801.avif';
import Slider3 from '../../assets/images/5a3c6c6a-2dd7-4dcb-8b23-2a560f245b85.avif';
import Slider4 from '../../assets/images/7f700807-01be-4fa3-80ea-bb990d4d4372.avif';
import Slider5 from '../../assets/images/a688a3fa-4b0e-4ddb-a83b-9778dbe23799.avif';
import Category from '../Category/Category';
import Products from '../Products/Products';
export default function Home() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1000,
        arrows:false,
    };
    return (
        <>
        {/* <div className="container"> */}
    <Slider {...settings}>
    <img src={Slider1} alt="" />
    <img src={Slider2} alt="" />
    <img src={Slider3} alt="" />
    <img src={Slider4} alt="" />
    <img src={Slider5} alt="" />
    </Slider>
    {/* </div> */}
    <Category />
    <Products/>
        </>
    )
}
