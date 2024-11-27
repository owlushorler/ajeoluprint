"use client"

import React, { useState, useEffect } from 'react'; 

import Image from 'next/image';
import image from "../images/images.jpg"
import image01 from "../images/images (1).jpg"
import stamp from "../images/Pocket-Seal-Stamp.jpg"
 

function Carousel() {  

    const [currentImageIndex, setCurrentImageIndex] = useState(0);  
 
    const images:any= [  
     image, 
    image01,  
    stamp
  ];  

  

  useEffect(() => {  
    const intervalId = setInterval(() => {  
      setCurrentImageIndex((prevIndex) =>  
        (prevIndex + 1) % images.length  
      );  
    }, 3000); // Change interval (in milliseconds) to adjust slide speed  

    return () => clearInterval(intervalId);  
  }, [images.length]);  


  const handlePrevClick = () => {  
    setCurrentImageIndex((prevIndex) =>  
      (prevIndex - 1 + images.length) % images.length  
    );  
  };  

  const handleNextClick = () => {  
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);  
  };  

  return (  
    <div className="relative w-full h-[300px] "> {/* Adjust height as needed */}  
      <Image
    src={images[currentImageIndex]}  
        alt={`Carousel Image ${currentImageIndex + 1}`}  
        className="w-full h-full object-cover"  
      />  
      {/*<div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4">  
       } <button  
          onClick={handlePrevClick}  
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"  
        >  
         
        </button>  
        <button  
          onClick={handleNextClick}  
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"  
        >  
          
        </button>  
       
      </div>*/}
        
    </div>  
  );  
}  

export default Carousel;