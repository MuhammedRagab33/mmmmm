import React, { useContext, useEffect } from 'react'
import logo from "../../assets/images/freshcart-logo.svg"
import { NavLink } from 'react-router-dom'
import { cartContext } from '../../Context/cartContext'
export default function Navbar() {
    let{counter ,getCart,setCounter} = useContext(cartContext)
    useEffect(()=>{
    (async()=>{
        let data = await getCart()
        console.log(data);
        if(data.status=='success'){
            setCounter(data.numOfCartItems)
        }
    })()
    },[])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
                <div className="container-fluid mx-4">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories">Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/brands">Brands</NavLink>
                            </li>
                        </ul>
                        
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
    <NavLink className="nav-link position-relative" to="/cart">Cart
    <i className="fa-solid fa-cart-shopping cartIcon py-2"></i>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {counter}
    <span class="visually-hidden">unread messages</span>
  </span>
  </NavLink>
</li>
{/* <li className="nav-item">
    <NavLink className="nav-link position-relative" to="/wishlist">Wishlist
    <i className="fa-solid fa-heart cartIcon py-2"></i>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    9
    <span class="visually-hidden">unread messages</span>
  </span>
  </NavLink>
</li> */}
                                <li className="nav-item  mm">
                                <NavLink className="nav-link" to="/signin">Logout</NavLink>
                            </li>  
</ul>

                    </div>
                </div>
            </nav>

        </>
    )
}
