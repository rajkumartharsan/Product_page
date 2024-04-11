import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import tea from '../assets/tea.jpg';
import { Link } from 'react-router-dom';

export default function Product_main() {
  return (
    <div>
      <Navbar />
      <h1 className='text-6xl text-center p-3 mb-2 font-serif'>Products</h1>
      <div className='flex'>
      <div className='flex bg-gray-200 rounded-3xl  ml-8 m-6 w-[620px] h-[215px]'>
            <div className='flex w-[215px] h-[215px]'>
              <img src={tea} alt="tea" />
            </div>
            <div className='flex-2 px-2 py-4'>
              <h1 className='font-bold text-center ml-5 text-2xl'>Carbal tea leaves</h1> 
              <p className='text-center'>Indulge in a world of exquisite flavors with <br/>our premium tea leaves collection, crafted <br/>to tantalize your senses with every sip."</p><br/><br/>
              <Link to='/Seeproduct' className='bg-green-700 text-white rounded-2xl w-60 text-center py-1 px-[90px]  ml-10 mr-10   cursor-pointer hover:opacity-95 '>Buy Now</Link>          
                </div>
          </div>

          <div className='flex bg-gray-200 rounded-3xl  ml-8 m-6 w-[620px] h-[215px]'>
            <div className='flex w-[215px] h-[215px]'>
              <img src={tea} alt="tea" />
            </div>
            <div className='flex-2 px-2 py-4'>
              <h1 className='font-bold text-center ml-5 text-2xl'>Yego Tea leaves </h1>
              <p className='text-center  Bold'>"Sip, savor, and unwind with our exquisite tea<br/> leaves collection, where every cup tells a  story <br/>of tradition, craftsmanship, and<br/> unparalleled flavor."</p><br/>
              <Link to='/Seeproduct' className='bg-green-700 text-white rounded-2xl w-60 text-center py-1 px-[90px]  ml-10 mt-[45px] mr-10 cursor-pointer hover:opacity-95 '>Buy Now</Link>    
                   </div>
          </div>
65
        
        
      </div>
              {/* 2 line */}

        <div className='flex'>
          <div className='flex bg-gray-200 rounded-3xl  ml-8 m-6 w-[620px] h-[215px]'>
            <div className='flex w-[215px] h-[215px]'>
              <img src={tea} alt="tea" />
            </div>
            <div className='flex-2 px-2 py-4'>
              <h1 className='font-bold text-center ml-5 text-2xl'>Carli tea leaves</h1> 
              <p className='text-center'>Indulge in a world of exquisite flavors with <br/>our premium tea leaves collection, crafted <br/>to tantalize your senses with every sip."</p><br/><br/>
              <Link to='/Seeproduct' className='bg-green-700 text-white rounded-2xl w-60 text-center py-1 px-[90px]  ml-10 mt-[45px] mr-10 cursor-pointer hover:opacity-95 '>Buy Now</Link>          
                </div>
          </div>

          <div className='flex bg-gray-200 rounded-3xl  ml-8 m-6 w-[620px] h-[215px]'>
            <div className='flex w-[215px] h-[215px]'>
              <img src={tea} alt="tea" />
            </div>
            <div className='flex-2 px-2 py-4'>
              <h1 className='font-bold text-center ml-5 text-2xl'>Jayantha Tea leaves </h1>
              <p className='text-center  Bold'>"Sip, savor, and unwind with our exquisite tea<br/> leaves collection, where every cup tells a  story <br/>of tradition, craftsmanship, and<br/> unparalleled flavor."</p><br/>
              <Link to='/Seeproduct' className='bg-green-700 text-white rounded-2xl w-60 text-center py-1 px-[90px]  ml-10 mt-[45px] mr-10 cursor-pointer hover:opacity-95 '>Buy Now</Link>    
                   </div>
          </div>
        </div>
         {/* 3 */}
       <div className='flex'>
          <div className='flex bg-gray-200 rounded-3xl  ml-8 m-6 w-[620px] h-[215px]'>
            <div className='flex w-[215px] h-[215px]'>
              <img src={tea} alt="tea" />
            </div>
            <div className='flex-2 px-2 py-4'>
              <h1 className='font-bold text-center ml-5 text-2xl'>Jenu Tea leaves </h1>
              <p className='text-center'> Embark on a flavorful journey around the world <br/>with our exotic tea leaves <br/>collection,sourced from the finest tea<br/> to bring you a taste of distant lands."</p><br/>
              <Link to='/Seeproduct' className='bg-green-700 text-white rounded-2xl w-60 text-center py-1 px-[90px]  ml-10 mt-[45px] mr-10 cursor-pointer hover:opacity-95 '>Buy Now</Link> </div>
          </div>

          <div className='flex bg-gray-200 rounded-3xl  ml-8 m-6 w-[620px] h-[215px]'>
            <div className='flex w-[215px] h-[215px]'>
              <img src={tea} alt="tea" />
            </div>
            <div className='flex-2 px-2 py-4'>
             <h1 className='font-bold text-center ml-5 text-2xl'>Gamora Tea leaves </h1> 
              <p className='text-center  Bold'>"Experience the art of tea-making with our <br/>handpicked tea leaves, each offering<br/> a unique blend of flavorsthat will elevate your <br/>tea-drinking experience."</p><br/>
              <Link to='/Seeproduct' className='bg-green-700 text-white rounded-2xl w-60 text-center py-1 px-[90px]  ml-10 mt-[45px] mr-10 cursor-pointer hover:opacity-95 '>Buy Now</Link> </div>
          </div>
        </div>

      {/* Remaining tea leaf sections */}
    </div>
  );
}
