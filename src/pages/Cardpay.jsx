import React, { useState } from 'react';
import { AiOutlineBackward } from "react-icons/ai";
import { Link } from 'react-router-dom'; 

const CashDelivery = ({ order, onOrder }) => {
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
    <div className="bg-green-700 text-white p-2 rounded-[20px]  mr-[690px] ml-2">
       <Link to='/Order'> 
       <AiOutlineBackward className=' text-2xl'/>
       </Link>
    </div>
    <h1 className='text-center font-bold text-2xl  '>Card  Payment</h1>
    <label className='my-10 font-bold '>
      Customer's Name:<br/>
      <input className="w-full p-2 border rounded" type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
    </label>
    <br/>
    <label className='font-bold'>
      Phone Number:<br/>
      <input className="w-full p-2 border rounded" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    </label>
    <br/>
    <label className='font-bold'>
      Address:<br/>
      <textarea className="w-full p-2 border rounded"value={address} onChange={(e) => setAddress(e.target.value)} />
    </label>
    <br/>
    <h3 className='font-bold'>Order Details:</h3>
    <p >Total ammount: </p>
    <div className='bg-gray-300 my-3 py-[10px]'>
         <div className='text-center font-bold my-[20px]'>Account deatils<br/></div>
          <div className='ml-[25px]' >Account No:</div>
          <div className='ml-[25px]'>Password:</div>
        
    </div>
    <div className="buttons">
      <button className="bg-green-700 text-white px-4 py-2 rounded-md ml-[300px]" onClick={handleOrderNow}>Order Now</button>
    </div>
  </div>
  );
};

export default CashDelivery;




{/* <div className="bg-gray-200 mx-[200px] my-11 px-[80px] py-[40px]">
<div className="bg-green-400 text-white p-2 rounded-[20px] pl-2 pr-2  mr-[650px] ml-8">
<AiOutlineBackward className='text-2xl'/>
</div>
<h1 className='text-center font-bold text-2xl  '>Cash Delivery</h1>
<label>
Customer's Name:
<input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
</label>
<label>
Phone Number:
<input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
</label>
<label>
Address:
<textarea value={address} onChange={(e) => setAddress(e.target.value)} />
</label>
<h3>Order Details</h3>
<p>Total:</p>
<div>
<div>Account deatils:123-455-677</div>
<div>Passwrod: ********</div>
<div>Edit</div>

</div>
<div className="buttons">
<button onClick={() => alert('Go back')}>Back</button>
<button onClick={handleOrderNow}>Order Now</button>
</div>
</div> */}