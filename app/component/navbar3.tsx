'use client'  

import { useState } from 'react';  
import Image from 'next/image'; 
import Carousel from './carousol'; 
import Link from 'next/link';
import CopyToClipboardButton from '../copy/page';

function Navbar3() {  
  const [isOpen, setIsOpen] = useState(false);  

  const toggleDropdown = () => {  
    setIsOpen(!isOpen);  
  };  
     

  return (  
    <div className="bg-gray-100 ">  
      
      <main className=" px-4 py-16 flex flex-col gap-5 m-11 md:flex md:flex-row md:gap-5 md:justify-center">  
        <div className="text-center  md:w-1/2">  
          <h1 className="text-3xl font-bold mb-4">  
            Design, Print & Package in One Place!  
          </h1>  
         
          <p className="">  
            Order everything you need for business, gifts, events and  
            exhibitions online and have them delivered in 3-5 business days!  
            Send your print-ready artwork or hire our experts to do the job.  
            We provide digital marketing tools, design and print quality  
            business cards, flyers, posters, calendars, brochures, books,  
            rollup banners, custom t-shirts, mugs, awards, promotional  
            materials, wedding souvenirs, packaging labels, vinyl stickers,  
            paper bags, personalized photo frames and wallpapers.  
          </p>  
          <ul className="text-lg list-disc list-inside mb-8">  
            <li>Quality Printing Services.</li>  
            <li>Competitive Pricing Offers.</li>  
            <li>Quick Delivery Nationwide.</li>  
          </ul>  
            
          <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">  
         <div className='flex flex-row align-middle j' > <Link href="https://api.whatsapp.com/send?phone=2348034548921&text=hi" > <img className='h-4 w-4 mx-1' src="https://i.ibb.co/zhcNrLq/pngtree-whatsapp-icon-png-image-6315990.png" alt="pngtree-whatsapp-icon-png-image-6315990"/></Link>   
           or call to Get a Quote  +2348034548921   <CopyToClipboardButton text="+2348034548921" /></div>
          </button>  
  
        </div>  
        <div className="flex justify-center "> 
         
            <Carousel  /> 
          
         
        </div>  
      </main>  
    </div>  
  );  
}  

export default Navbar3;