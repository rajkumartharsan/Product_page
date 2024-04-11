import React from 'react'
import { FaSquareFacebook ,FaSquareInstagram , FaSquareThreads ,FaSquareXTwitter} from "react-icons/fa6";
import FooterImage from '../assets/footer.jpg'

export default function Footer() {
  return (
    <div className="w-[1519px] h-[300px] bg-cover" style={{ backgroundImage:`url(${FooterImage})`}}>
    <h2 className='text-center font-bold text-5xl text-white'>Let's Start</h2>
    <p className='text-white text-2xl text-center pt-8 '>Sip ,Enjoy ,Explore Discover more</p>
    <div className='flex text-white text-4xl gap-5 justify-center pt-10 mb-5'>
        <FaSquareFacebook/>
        <FaSquareInstagram/>
        <FaSquareXTwitter/>
        <FaSquareThreads/>
    </div>
    <hr/>
    <div className='flex text-white text-sm'>
        <div className='pl-3'><p>freshleaf@gmail.com</p></div>
        <div className=' ml-[1200px]'><p>+94 678345902</p></div>
    </div>
</div>
  )
}
