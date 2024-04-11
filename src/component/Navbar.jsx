import React from 'react';
import Logo from '../assets/Logo.png';
// import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='flex justify-between mt-4 px-14'>
      <div>
        <img className='w-[120px] h-[48px]' src={Logo} alt='Logo' />
      </div>
      <div>
        <ul className='flex gap-5'>
          <li>
            <button className='hover:text-[#75d705] hover:border-solid cursor-pointer'>
              Home
            </button>
          </li>
          <li>
            <button className='hover:text-[#75d705] hover:border-solid cursor-pointer'>
              About
            </button>
          </li>
          <li>
            <button className='hover:text-[#75d705] hover:border-solid cursor-pointer'> 
              Products
            </button>
          </li>
          <li>
            <button className='hover:text-[#75d705] hover:border-solid cursor-pointer'>
              Contact
            </button>
          </li>
        </ul>
      </div>
      <div>
        <button className=" bg-[#39741e] text-white px-2 py-1 rounded-sm hover:opacity-95 cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
}
