import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { cartContext } from '../../Context/cartContext';
export default function Address() {
    let navigate = useNavigate()
    let {id} = useParams()
    let [errMsg, setErrMsg] = useState('')
let {pay}= useContext(cartContext)

    async function sendDataToApi(values) {
        let data= await pay(id ,values)
        console.log(data)
        if(data.status=='success'){
            window.location.href=data.session.url
        }    
    }

    let address = useFormik({
        initialValues: {

            dateils: '',
            phone: '',
            city: '',

        },
        onSubmit: (values) => {
            sendDataToApi(values)
        }
    })


    return (
        <div>

            <div className="w-75 m-auto my-5">
                <h2>address Now:</h2>
                <form onSubmit={address.handleSubmit}>

                    <label htmlFor="details">datails:</label>
                    <textarea onBlur={address.handleBlur}  onChange={address.handleChange} className='form-control mb-3' type="text" name="datails" id="datails" ></textarea>

                    <label htmlFor="phone">phone:</label>
                    <input onBlur={address.handleBlur}  onChange={address.handleChange} className='form-control mb-3' type="text" name="phone" id="phone" />

                    <label htmlFor="city">city:</label>
                    <input onBlur={address.handleBlur}  onChange={address.handleChange} className='form-control mb-3' type="text" name="phone" id="city" />

                    {errMsg ? <div className="alert alert-danger">
                        {errMsg}
                    </div> : ''}

                    <button disabled={!(address.isValid && address.dirty)} type='submit' className='btn bg-main text-white'>Pay</button>
                </form>
            </div>
        </div>
    )
}