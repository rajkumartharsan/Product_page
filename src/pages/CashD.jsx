import React, { useState } from 'react';
import { AiOutlineBackward } from "react-icons/ai"; //back button
import { Link } from 'react-router-dom';
const CashD = ({ order, onOrder }) => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleOrderNow = () => {
    // Assuming some validation for required fields
    if (customerName && phoneNumber && address) {
      const deliveryDetails = {
        customerName,
        phoneNumber,
        address,
        order
      };
      onOrder(deliveryDetails);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    
    <div className='bg-gray-200 mx-[200px] my-10 px-[80px] py-[40px]'>
      <div className="bg-green-700 opacity-80 text-white px-2 py-2 rounded-[30px] mr-[720px]">
            <Link to='/Order'> <AiOutlineBackward className=' text-2xl'/></Link>
      </div>
      <h1 className='text-center font-bold text-2xl  '>Cash On Delivery</h1>
      <label className='my-10  '>
        Customer's Name:<br/>
        <input className="w-full p-2 border rounded" type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
      </label>
      <br/>
      <label>
        Phone Number:<br/>
        <input className="w-full p-2 border rounded" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label>
      <br/>
      <label>
        Address:<br/>
        <textarea className="w-full p-2 border rounded"value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br/>
      <h3>Order Details</h3>
      <p>Total ammount: </p>
      <div className='bg-gray-300 my-3  font-bold text-center text-gray-500'>"if you buy the products,delivery person<br/>
        will delivery the product and make the payment"</div>
      <div className="buttons">
        <button className="bg-green-700 text-white px-4 py-2 rounded-md ml-[300px]" onClick={handleOrderNow}>Order Now</button>
      </div>
    </div>
  );
};
export default CashD;
