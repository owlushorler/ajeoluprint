"use client"
import { useState } from 'react' 
import Image from 'next/image'
import rollupbanners from "../images/rollupbanners.jpg" 
import atwo from "../images/69.jpg" 
import front from "../images/front.jpg"
import carrap from "../images/Car-Wrap-design.png"
import Link from 'next/link'


export default function Body2() {  
  const [products] = useState([  
    {  
      image: atwo,  
      title: 'A2 Poster Printing Lagos',  
      price: '1,500',  
      category: 'Hot'  
    },  
    {  
      image:  rollupbanners,  
      title: 'Rollup Banners Printing',  
      price: '53,000',  
      category: 'New'  
    },  
    {  
      image: front,  
      title: 'Front Desk Office Branding',  
      price: '897',  
      category: 'Hot'  
    },  
    {  
      image: carrap,  
      title: 'Car Wraps & Vehicle Branding in Lagos',  
      price: '85,000',  
      category: ''  
    },  
  ])  

  return (  
    <div className="container mx-auto px-4 py-8">  
      <h1 className="text-3xl font-bold text-center mb-8">  
        Banners, Displays & Advertising Materials  
      </h1>  
      <p className="text-center mb-8">  
        Build powerful visual communication tools to convey your messages. We use creative designs, compelling imagery and concise messaging to capture attention, guide customers and promote brand recognition across all advertising campaigns.  
      </p>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">  
        {products.map((product) => (  
          <div key={product.title} className="relative rounded-md shadow-md overflow-hidden">  
            <Image src={product.image} alt={product.title} className="w-full h-48 object-cover" />  
            <div className="p-4">  
              <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>  
              <p className="text-gray-600 mt-2">  
                
              </p>  
              {product.category && (  
                <div className="absolute top-4 right-4 rounded-full bg-red-500 text-white font-bold text-xs px-2 py-1">  
                  {product.category}  
                </div>  
              )}  
            </div>  
          </div>  
        ))}  
      </div>  
      <div className="text-center mt-8">  
       <Link href="/Award" > <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">  
          View Products  
        </button>  </Link>
      </div>  
    </div>  
  )  
}