"use client"

import Link from 'next/link';
import CopyToClipboardButton from '../copy/page';

export default function Homes() {  
  return (  
    <div className="bg-blue-800  text-white text-center "> 

      <div className=" container mx-auto flex items-center justify-between px-2 py-2 text-0.5 text-xs">  
        <div className="flex items-center  flex-col md:flex md:flex-row">  
          <div className="bg-gray-100 rounded-md px-3 py-1 mr-2 text-red-800 ">  
            <span className="font-bold">10% OFF</span>  
          </div>  
          <span>Free Shipping On Lagos Orders Over N35K!</span> 
  
        </div>  
        <div className="flex items-center">  
          {/*whatapp*/}
          <div className='flex flex-col md:flex md:flex-row items-center' >
        <Link href="https://api.whatsapp.com/send?phone=2348034548921&text=hi" > <img className='h-4 w-4 mx-1' src="https://i.ibb.co/zhcNrLq/pngtree-whatsapp-icon-png-image-6315990.png" alt="pngtree-whatsapp-icon-png-image-6315990"/></Link>   
          <span className="mr-4">MAKE A CALL NOW: (+234) 8034548921  </span>  
          </div>
          <div className="flex space-x-2">  
          <CopyToClipboardButton text="+2348034548921" />


            
           {/* <a href="#" className="text-white hover:text-gray-300">  
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>  
            </a>  
            <a href="#" className="text-white hover:text-gray-300">  
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1-2.89m8.14-5.1c.72-.13 1.44-.25 2.16-.37 1.1.13 2.16.37 3.14 1.53a10.8 10.8 0 01-3.14 1.53m-8.14 11.9l-.77-.3c-.31-.12-.55-.24-.77-.36m-3.31.9l-.77-.3a4.48 4.48 0 00-7.86 3v1-2.89m8.14-5.1c.72-.13 1.44-.25 2.16-.37 1.1.13 2.16.37 3.14 1.53a10.8 10.8 0 01-3.14 1.53m-8.14 11.9l-.77-.3c-.31-.12-.55-.24-.77-.36m-3.31.9l-.77-.3a4.48 4.48 0 00-7.86 3v1-2.89m8.14-5.1c.72-.13 1.44-.25 2.16-.37 1.1.13 2.16.37 3.14 1.53a10.8 10.8 0 01-3.14 1.53m-8.14 11.9l-.77-.3c-.31-.12-.55-.24-.77-.36m-3.31.9l-.77-.3a4.48 4.48 0 00-7.86 3v1-2.89m8.14-5.1c.72-.13 1.44-.25 2.16-.37 1.1.13 2.16.37 3.14 1.53a10.8 10.8 0 01-3.14 1.53m-8.14 11.9l-.77-.3c-.31-.12-.55-.24-.77-.36m-3.31.9l-.77-.3a4.48 4.48 0 00-7.86 3v1-2.89m8.14-5.1c.72-.13 1.44-.25 2.16-.37 1.1.13 2.16.37 3.14 1.53a10.8 10.8 0 01-3.14 1.53" /></svg>  
            </a>  
            <a href="#" className="text-white hover:text-gray-300">  
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 7.37 4 4 0 0116 11.37zm1.5 0a4.5 4.5 0 01-2.88 3.87l.88 2.66a.75.75 0 01-1.44 0L12.63 16.13a4.5 4.5 0 01-2.88-3.87l.88-2.66a.75.75 0 01-1.44 0L7.37 12.63a4.5 4.5 0 013.87-2.88l2.66.88a.75.75 0 010 1.44L11.37 16a4.5 4.5 0 013.87 2.88l2.66-.88a.75.75 0 010-1.44L17.5 12.63a4.5 4.5 0 01-2.88-3.87l-.88-2.66a.75.75 0 011.44 0L12.63 7.37a4.5 4.5 0 012.88 3.87l-2.66.88a.75.75 0 010 1.44z" /></svg>  
            </a>  */}
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}