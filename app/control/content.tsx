"use client"
// pages/index.js  
import { useEffect, useState } from 'react'; 
import Image from 'next/image'; 
import Reviewss from '../component/body4';
import Footer from '../component/footer';
import Homes from '../component/NotBar';
import Navbar2 from '../component/navbar2';
import CopyToClipboardButton from '../copy/page';
import Link from 'next/link';
export default function  Content (prop:any) {  
   const [users, setUsers] = useState([]);  
   const [fit, setfit] = useState([])

   useEffect(() => {  
      const fetchUsers = async () => {  
         
            const response = await fetch("https://ajeolu-backend.onrender.com/user"); 
      
            const data = await response.json();  
            setUsers(data);  
           
          

      
            };  
    
      
     
      
      fetchUsers();  
     
   },[]);
   
   const ream = users.filter((ele)=>{return ele.title == prop.title })

   console.log(ream)
  

   return (  
      <div>
        <Homes/>
        <Navbar2/>  
         <div className='bg-blue-700 h-32 text-center text-white  md:text-7xl text-5xl py-9' >
    {prop.name}
  </div>
  
         <div> <div className='bg-red-800 text-white text-center m-3 ' >MAKE CALL NOW TO GET QUOTE</div>
         <div className=' m-10  flex flex-col items-center md:grid  md:grid-cols-2 md:mx-20 md:gap-5 md:items-center ' >
            {ream.map((user) => (  
               <div className='md:grid md:items-center shadow-2xl p-4 '>
              <div   key={user.title}></div>  
              <div className='flex flex-row justify-center'> <img  className='h-64 w-96 ' src={user.picture}  alt='user'/> </div>
              <div className='text-xl text-center ' >  {user.name}  </div>
              <div  className=' flex flex-row items-center justify-center bg-blue-900 text-white rounded text-center ' >
               <div className='flex flex-row align-middle items-center my-2'>
               <Link href="https://api.whatsapp.com/send?phone=2348034548921&text=hi" > <img className='h-4 w-4 mx-1' src="https://i.ibb.co/zhcNrLq/pngtree-whatsapp-icon-png-image-6315990.png" alt="pngtree-whatsapp-icon-png-image-6315990"/></Link>   
               or call to Get a your  +2348034548921   <CopyToClipboardButton text="+2348034548921" />
               </div>
              
              </div>
              
              </div>
              
            ))} 
             </div> 
            
            
         </div> 
         <Reviewss/>
         <Footer/>

      </div>  
   );  
}