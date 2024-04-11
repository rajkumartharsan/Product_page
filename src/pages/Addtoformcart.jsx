import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { AiOutlineBackward } from "react-icons/ai"; //back button


export default function Addtoformcart() {
    const[products, setProducts] =useState([])
  return (
    
    <div className='bg-gray-200 mx-[200px] my-11 px-[80px] py-[40px]'>
    <div className="bg-green-700 opacity-80 text-white px-2 py-2 rounded-[30px] mr-[720px]">
            <Link to='/Seeproduct'> <AiOutlineBackward className=' text-2xl'/></Link>
      </div>  
        <table className="addtocart-table my-3">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Product</th>
                  <th className="border border-gray-300 px-4 py-2">Weight</th>
                  <th className="border border-gray-300 px-4 py-2">Count</th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
                  <th className="border border-gray-300 px-4 py-2"> buttons</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.weight}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.count}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                    <td className="border border-gray-300 px-4 py-2"> </td>
                  </tr>
                ))}
              </tbody>
            </table>
    <div><h3 className="text-lg font-bold mb-4">Total prize is:</h3></div>
    <div className="flex mb-4">
    <h3 className="text-lg font-bold mb-4">How to pay : </h3>
    {/* link to cash on delivary */}
      <Link to='/CashD' className="bg-green-700 text-white px-4 py-2 rounded-md mr-10">   
        Cash on Delivery
      </Link>
      {/* link to cardPaymnet */}
      <Link to='/Cardpay' className="bg-green-700 text-white px-4 py-2 rounded-md">
        Card Payment
      </Link>
    </div>
  </div>
  )
}
