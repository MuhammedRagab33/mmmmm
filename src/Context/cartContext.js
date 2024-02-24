import axios from "axios";
import { createContext, useState } from "react";
import { baseURL } from "../utils/baseUrl";


export let cartContext = createContext (0)

// async function ceredCard(productId){
//     return axios.post(baseURL +'orders'+checkout-session,{productId},{headers:{
//         token:localStorage.getItem('token')
//     }
//     })
//     .then(({data})=>data).catch(err=>err)
// }

function addToCart(productId){
    return axios.post(baseURL +'cart',{productId},{headers:{
        token:localStorage.getItem('token')
    }
    })
    .then(({data})=>data).catch(err=>err)
}

async function removeItem(productId){
    return axios.delete(baseURL +'cart/'+productId,{headers:{
        token:localStorage.getItem('token')
    }
    })
    .then(({data})=>data).catch(err=>err)
}

async function updateQTY(productId,count){
    return axios.put(baseURL +'cart/'+productId,{count},{headers:{
        token:localStorage.getItem('token')
    }
    })
    .then(({data})=>data).catch(err=>err)
}

function getCart(){
    return axios.get(baseURL +'cart',{headers:{
        token:localStorage.getItem('token')
    }
    })
    .then(({data})=>data).catch(err=>err)
}

async function pay(cartId,shippingAddress){
    return axios.post(baseURL +'orders/checkout-session/'+ cartId,{shippingAddress},{headers:{
        token:localStorage.getItem('token')
    }
    })
    .then(({data})=>data).catch(err=>err)
}

export default function CartContextProvider({children}){
    const[counter, setCounter]=useState(0)
    return <cartContext.Provider
    value={{counter,
    setCounter,
    addToCart,
    getCart,
    removeItem,
    updateQTY,
    pay
    }}>
    {children}
    </cartContext.Provider>
}
