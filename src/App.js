import React from 'react'
// import Navbar from './components/Navbar/Navbar'
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Wishlist from './components/Wishlist/Wishlist'
import Categories from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import NotFound from './components/NotFound/NotFound'
import AuthLayout from './layouts/AuthLayout'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import ProductDetalis from './components/ProductDetails/ProductDetails'
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes'
import CartContextProvider from './Context/cartContext'
import Category from "./components/Category/Category"
import Address from './components/Address/Address'
import Allordes from "./components/Allorders/Allorders"
import { ToastContainer } from 'react-toastify'
export default function App() {

  const routes = createHashRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { index: true, element:<ProtectedRoutes> <Home /></ProtectedRoutes> },
        { path: 'home', element: <ProtectedRoutes> <Home /></ProtectedRoutes> },
        { path: 'products', element:<ProtectedRoutes> <Products /></ProtectedRoutes>  },
        { path: 'cart', element: <ProtectedRoutes><Cart /></ProtectedRoutes>  },
        { path: 'categories', element:<ProtectedRoutes> <Categories /></ProtectedRoutes>  },
        { path: 'brands', element:<ProtectedRoutes><Brands /></ProtectedRoutes>   },
        { path: 'wishlist', element:<ProtectedRoutes><Wishlist/></ProtectedRoutes> },
        { path: 'product-details/:id', element:<ProtectedRoutes><ProductDetalis/></ProtectedRoutes> },
        { path: 'category', element:<ProtectedRoutes><Category/></ProtectedRoutes> },
        { path: 'address/:id', element:<ProtectedRoutes><Address/></ProtectedRoutes> },
        { path: 'allorders', element:<ProtectedRoutes><Allordes/></ProtectedRoutes> },
        { path: '*', element: <NotFound /> },
      ]
    },
    {
      path: '/', element: <AuthLayout />, children: [

        { path: 'signup', element: <Signup /> },
        { path: 'signin', element: <Signin /> },

      ]
    }
  ])

  return (
    <>
    <ToastContainer theme='colored' autoClose={600} />
      <CartContextProvider>
      <RouterProvider router={routes} />
      </CartContextProvider>
    </>
  )
}
