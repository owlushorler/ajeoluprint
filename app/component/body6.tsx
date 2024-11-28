import React from 'react';  
import Link from 'next/link';  

const products = [  
  {  
    title: 'Lanyards Printing in Lagos',  
    price: '₦850',  
    image: 'https://i.ibb.co/LtjsJDM/Lanyards-Printing-i.jpg" ', // Replace with your actual image path  
    hot: true,  
  },  
  {  
    title: 'Awards Certificates Printing',  
    price: '₦2,760',  
    image: 'https://i.ibb.co/LzCW6jZ/Awards-Certificates-Printing.png', // Replace with your actual image path  
  },  
  {  
    title: 'Pictures & Photo Frames',  
    price: '₦6,500',  
    image: 'https://i.ibb.co/LngwMWG/Pictures-Photo-Frames.png', // Replace with your actual image path  
    hot: true,  
  },  
  {  
    title: 'Canvas Printing in Lagos',  
    price: '₦35,000',  
    image: 'https://i.ibb.co/1RF741t/Canvas-Printing.jpg', // Replace with your actual image path  
  },  
];  

export default function body6() {  
  return (  
    <div className="container mx-auto p-5 text-center">  
      <div className="flex flex-col mb-5">  
        <h1 className="text-3xl font-bold">  
          Award Plaques, Trophies, Home & Office Décors  
        </h1>  
        <p className="text-gray-600">  
          Reward achievements and honor outstanding individuals with well-crafted  
          wooden, acrylic and crystal glass awards plaques. These accolades  
          serve as reminders of dedication; fostering motivation and recognition  
          in sports, academics, corporate and community accomplishments.  
        </p>  
        <Link href="cards">  
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3">  
            View Products →  
          </button>  
        </Link>  
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">  
        {products.map((product) => (  
          <div  
            key={product.title}  
            className="bg-white rounded-md shadow-md p-4 relative"  
          >  
            <img  
              src={product.image}  
              alt={product.title}  
             
            />  
         
            {product.hot && (  
              <div  
                className="absolute top-2 right-2 bg-red-500 text-white font-bold px-2 py-1 rounded-full"  
              >  
                Hot  
              </div>  
            )}  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
}