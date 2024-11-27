import React from 'react';  
import Image from 'next/image';  
import Link from 'next/link';  

const products = [  
  {  
    title: 'Custom Engraved Jewelry Box',  
    price: '₦3,450',  
    image: 'https://i.ibb.co/TMYfYjj/Custom-Engraved-Jewelry-Box.jpg', // Replace with your actual image path  
  },  
  {  
    title: 'Birthday Greeting Card',  
    price: '₦24,300',  
    image: 'https://i.ibb.co/MpL8XQk/Birthday-Greeting-Card.jpg', // Replace with your actual image path  
  },  
  {  
    title: 'Pictures & Photo Frames',  
    price: '₦6,500',  
    image: 'https://i.ibb.co/DDshj9m/frame.jpg', // Replace with your actual image path  
    hot: true,  
  },  
  {  
    title: 'Vinyl Wall Decals & Stickers',  
    price: '₦25,460',  
    image: 'https://i.ibb.co/27h9L5R/Vinyl-Wall-Decals-Stickers.jpg', // Replace with your actual image path  
  },  
];  

export default function Body5() {  
  return (  
    <div className="container mx-auto p-5 text-center">  
      <h1 className="text-3xl font-bold mb-5">  
        Events Printing, Wedding Invitations & Souvenirs  
      </h1>  
      <p className="mb-5">  
        Showcase special occasions to guests with tailored printing solutions.  
        Capture the essence of your weddings, galas, business expos and  
        conferences with bespoke invitations, programs, elegant displays, gazebo  
        tents, and promo tables.  
      </p>  
      <Link href="/books">  
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">  
          View Products →  
        </button>  
      </Link>  
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">  
        {products.map((product) => (  
          <div  
            key={product.title}  
            className="bg-white rounded-md shadow-md p-4 relative"  
          >  
            <img  
              src={product.image}  
              alt={product.title}  
              className="rounded-md mb-4"  
            />  
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>  
          
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