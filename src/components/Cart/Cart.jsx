import React, { useContext, useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/cartContext'


export default function Cart() {
    let{getCart ,removeItem ,setCounter ,updateQTY}= useContext(cartContext)
    const[cartItems , setCartItems]=useState([])

async function deleteProduct(id){
    let data= await removeItem(id)
    console.log(data)
    setCartItems(data)
    setCounter(data.numOfCartItems)

}
async function updateProductQuantity(id,count){
    let data= await updateQTY(id,count)
    console.log(data)
    setCartItems(data)
    setCounter(data.numOfCartItems)
}

useEffect(()=>{
    (async()=>{
        let data = await getCart()
        setCartItems(data)
        console.log(data);
        if(data.status=='success'){
            // setCartItems(data.data.products)
        }
    })()
    },[])


    return (
        <>
        <div className='container bg-main-light my-3 p-3'>
            <h2>Shop Cart</h2>
            <p className='text-main'>Total Cart Price: {cartItems?.data?.totalCartPrice}EGP</p>
            {cartItems?.data?.products.map(item=>{
                return <div key={item._id} className='row border-bottom py-2'>
                <div className='col-md-1'>
                    <img src={item.product.imageCover} className='w-100' alt="" />
                </div> 
                <div className='col-md-11 d-flex justify-content-between'>
                    <div>
                        <h5>{item.product.title}</h5>
                        <p className='text-main m-0'>price:{item.price}EGP</p>
                        <button onClick={()=>deleteProduct(item.product._id)} className='btn m-0 mt-2 p-0'><i className="text-main fa-solid fa-trash-can"></i>Remove</button>
                    </div>
                    <div>
                        <button onClick={()=>updateProductQuantity(item.product._id,item.count +1)} className='btn bodr'>+</button>
                        <span className='mx-2'>{item.count}</span>
                        <button disabled={item.count<=1} onClick={()=>updateProductQuantity(item.product._id,item.count -1)} className='btn bodr'>-</button>
                    </div>
                </div>
            </div> 
            })} 
            <Link to={`/address/${cartItems?.data?._id}`} className='btn bg-main text-white my-3'>Piace Order</Link>
        </div> 
        </>
    )
}
