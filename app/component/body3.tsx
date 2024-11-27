import { useState } from 'react';  
import Image from 'next/image';
import charg from "../images/charger.jpg"
import car from "../images/Car-Wrap-design.png"
import tshirt from "../images/custom-t-shirt.jpeg"
import hoper from "../images/chrismasHoper.jpg"
import Link from 'next/link';

const products = [  
  {  
    image: charg, 
    title: 'Branded Mobile Phone Charger',  
    price: '1,459',  
  },  
  {  
    image: car,
    title: 'Custom-Printed Car Air Fresheners',  
    price: '750',  
  },  
  {  
    image: tshirt, 
    title: 'Customized T-Shirts Printing',  
    price: '6,800',  
    category: 'Hot',  
  },  
  {  
    image : hoper,
    title: 'Christmas Gifts Hampers',  
    price: '34,200',  
  },  
];   

export default function Body3() {  
  return (  
    <div className="container mx-auto px-4 py-8 text-center " >  
      <h2 className="text-3xl font-bold mb-4">  
        Printed Corporate Gifts and Promotional Items  
      </h2>  
      <p className="text-gray-600 mb-8">  
        Order customized pens, notebooks, and tech gadgets with your company's logo,  
        personal pictures, or text. Our gift items serve as tangible reminders of  
        your brand and love. They foster goodwill and leave a memorable impact on  
        clients, friends, and employees.  
      </p>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">  
        {products.map((product) => (  
          <div key={product.title} className="rounded-md shadow-md p-4">  
            <Image  
              src={product.image}  
              alt={product.title}  
              className="w-full h-40 object-cover rounded-md mb-4"  
            />  
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>  
            
            {product.category && (  
              <span  
                className="inline-block px-2 py-1 rounded-full bg-red-500 text-white font-bold text-xs"  
              >  
                {product.category}  
              </span>  
            )}  
          </div>  
        ))}  
      </div>  
      <div className="mt-8">  
      <Link href="/shirt" ><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">  
          View Products →  
        </button>  </Link>  
      </div>  
    </div>  
  );  
}