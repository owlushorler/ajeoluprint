import React from 'react';  


const Reviewss = () => {  
  return (  
    <div className="bg-white py-8 px-4 rounded-md shadow-md">  
      <h2 className="text-2xl font-bold text-gray-800 mb-4">  
        What Our Customers Are Saying  
      </h2>  
      <div className="flex flex-col md:flex-row gap-4">  
        <div className="flex-1">
        <div className="mt-4 flex items-center">  
        <p className="text-gray-600">5 Stars of Service</p>  
        <div className="ml-2 flex">  
          <span className="text-yellow-500">★★★★★</span>  
        </div>  
      </div>   
          <p className="text-gray-600">  
            "We have always received personalized services and attention from  
            the team. They take a real interest in our business and make good  
            recommendations. It's a pleasure working with the staff." - Akinsanya .M.  
          </p>  
        </div>  
        <div className="flex-1"> 
        <div className="mt-4 flex items-center">  
        <p className="text-gray-600">4.9 Stars of Service</p>  
        <div className="ml-2 flex">  
          <span className="text-yellow-500">★★★★★</span>  
        </div>  
      </div>  
          <p className="text-gray-600">  
            "These guys changed my opinion. The staffs are creative and  
            helpful always. And the quality exceeds the price many times. As a  
            busy person, I am always happy and grateful for their friendly and  
            professional services." - Gabriel .S.  
          </p>  
        </div>  
        <div className="flex-1">  
        <div className="mt-4 flex items-center">  
        <p className="text-gray-600">4.5 Stars of Service</p>  
        <div className="ml-2 flex">  
          <span className="text-yellow-500">★★★★★</span>  
        </div>  
      </div> 
          <p className="text-gray-600">  
            "Beautiful work that will showcase my company exactly as I had  
            hoped. Thank you iPrints team. They endeavored to compete and  
            deliver every job I have in a timely manner. The finished product  
            was completed based on specifications." - Dr Akingbade .k.  
          </p>  
        </div>  
      </div>  
     
    </div>  
  );  
};  

export default Reviewss;