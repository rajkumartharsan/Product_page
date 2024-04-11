import React, { useState } from 'react';
import { Link } from 'react-router-dom';        // Import Link component
import Navbar from '../component/Navbar';
import { FaStar } from 'react-icons/fa';
import greenTea from '../assets/greenTea.jpg';
import { MdClose } from 'react-icons/md';      // Import the close icon

export default function Seeproduct() {
  const [size, setSize] = useState(0);

  const increaseSize = () => {
    setSize(prevSize => prevSize + 1);
  };

  const decreaseSize = () => {
    if (size > 1) {
      setSize(prevSize => prevSize - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: '#D9D9D9', padding: '20px', marginLeft: '120px', marginRight: '120px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            {/* image */}
            <img src={greenTea} alt="Product" style={{ width: '300px', height: '300px', borderRadius: '20px' }} />
          </div>
          <div style={{ flex: '2', paddingLeft: '20px' }}>
          
            <div className="bg-red-500 p-2 rounded-full pr-2 ml-[650px]">
             <Link to='/' className="text-white" ><MdClose /></Link>
            </div>

            <h1 style={{ fontWeight: 'bold', fontSize: '24px' }}>Fixni Tea leaves </h1>

            <p style={{ marginTop: '10px' }}>Experience the art of tea-making with our handpicked tea leaves,<br /> each offering a unique blend of flavors that will elevate your<br /> tea-drinking experience.</p>
            <select style={{ marginBottom: '10px' }}>
              <option value="250g">250g</option>
              <option value="500g">500g</option>
              <option value="1000g">1000g</option>
              <option value="2000g">2000g</option>
            </select>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="number"
                pattern="[0-9]*"
                placeholder="size"
                style={{ width: '60px' }}
                min="0"
                max="99"
                value={size}
                onChange={e => setSize(e.target.value)}
              />
            </div>
            <div className='h-[100px]'>
              <Link to='/Addtoformcart' className='bg-green-800 text-white w-[100px] text-center  px-4 py-2 rounded-md ml-32 mr-24 mt-10 cursor-pointer hover:opacity-80 '>Add to cart</Link>
              <Link to='/Order' className='bg-green-800 text-white  w-[100px] text-center  px-10 py-2 rounded-md ml-10  mr-10 mt-10 cursor-pointer hover:opacity-80 '>Pay</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
