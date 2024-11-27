'use client'  

import { useState } from 'react'  
import Link from 'next/link';

export default function Navbar2() {  
  const [isOpen, setIsOpen] = useState(false);  

  const toggleDropdown = () => {  
    setIsOpen(!isOpen);  
  }  

  return ( <div>
    <nav className="   bg-whiteshadow-md ">  
      
      <div className='flex justify-between'>
   <Link href="/" >    <h1 className=" hover:cursor-pointer text-2xl font-bold my-2 mx-4">AJEOLU PRINT</h1> </Link> 
     {!isOpen &&<div className='text-4xl md:hidden mx-4 cursor-pointer' onClick={toggleDropdown} >&equiv;</div> } 
     {isOpen && <div className='text-4xl md:hidden mx-4 cursor-pointer' onClick={toggleDropdown} > &#9662;</div> }
      <div className=" hidden md:container md:mx-auto md:px-4 md:py-2 md:flex md:justify-between md:items-center ">  
        

        <ul className="flex fl  gap-3">  
        <li className="relative"> 
          
           <select  className='w-16 hover:cursor-pointer' onChange={(e) => {
            const path = e.target.value;
            window.location.href = path;
               }}>
            <option  value="/"> 
              Print
            </option>
            <option  value="office" > 
              Office stationaries
              
            </option>
            <option  value="cards">
              Card and Invitations
            </option>
            <option  value="books">
              Books and Stationaries
            </option>
            <option  value="shirt">
             customs shirt and cap
            </option>
            
          
            <option  value="Award">
              Award Banner and Stand
            </option>

           
          
            
           </select>
            
    
          </li>   
          <li className="relative">  
           <select className='w-16 hover:cursor-pointer' onChange={(e) => {
            const path = e.target.value;
            window.location.href = path;
               }}>
            <option  >
              Brand
            </option>
            <option value="frameArt" >
              frames and wall art
            </option>
          {/*  <option value="corprateBrand" >
              corporate branding
            </option>
            
            <option value="promotionalGift" >
              promotional Gift
            </option>
            <option value="" >
              Smart Gadget
            </option>*/}
            
           </select>
            
    
          </li>  
          
          <li className="relative">  
          <div>Website Design</div>
            
    
          </li>  
        
            
    
   
          <li className="relative hover:cursor-pointer">  
          <Link href="/about" > <div>Contact Us</div></Link>
           {/*<select className='w-24' >
            <option>
              Help Desk
            </option>
            <option>
              about AjeoluPrint
            </option>
            <option>
              contact us
            </option>
            
           </select>*/}
            
    
          </li> 
           
        </ul>  

        <button className="bg-blue-800 text-sm text-white font-bold py-2 px-4 rounded-md">  
        MAKE A CALL FOR YOUR QUOTE
        </button>  
      </div>  
      </div>  
    </nav>
{/*side toggle */}
  {isOpen &&   <div className=" md:hidden container mx-auto px-4 py-2 flex flex-col gap-8 justify-between items-start">  
       

        <ul className="flex flex-col  gap-6">  
        <li className="relative">  
           <select  className='w-16 hover:cursor-pointer'>
           <option  value="/"> 
              Print
            </option>
            <option  value="office" > 
              Office stationaries
              
            </option>
            <option  value="cards">
              Card and Invitations
            </option>
            <option  value="books">
              Books and Stationaries
            </option>
            <option  value="shirt">
             customs shirt and cap
            </option>
            
          
            <option  value="Award">
              Award Banner and Stand
            </option>

            
           </select>
            
    
          </li>   
          <li className="relative hover:cursor-pointer">  
           <select className='w-16'>
            <option>
              Brand
            </option>
            <option>
              frames and wall art
            </option>
          {/*}  <option>
              corporate branding
            </option>
            
            <option>
              promotional Gift
            </option>
            <option>
              Smart Gadget
            </option>
          */}
            
           </select>
            
    
          </li>  
          
          <li className="relative hover:cursor-pointer">  
          <div>Website Design</div>
            
    
          </li>  
        
            
    
   
          <li className="relative">  

           <Link href="/about" > <div>Contact Us</div></Link>
          {/*} <select className='w-24' >
            <option>
              Help Desk
            </option>
            <option>
              about AjeoluPrint
            </option>
            <option>
              contact us
            </option>
            submit complains
           </select>*/}
            
    
          </li> 
           
        </ul>  

        <button className="bg-blue-800 text-sm text-white font-bold py-2 px-4 rounded-md">  
          MAKE A CALL FOR YOUR QUOTE
        </button>  
      </div>  }


    
      
    </div> 
  );  
}