import React from 'react';  
import Image from 'next/image';  
import book from  "../images/images (2).jpg"
import book1 from  "../images/images (3).jpg"
import book2 from  "../images/images (4).jpg"
import book3 from  "../images/images (5).jpg"
import Link from 'next/link';



function Services2() {  
  const services = [  
    {  
      title: 'A4 Journal Notebook With Pen',  
      price: '#6,500',  
      image: book  
    },  
    {  
      title: 'Company Annual Reports Printing',  
      price: '#2,800',  
      image: book1 
    },  
    {  
      title: 'Colorful Sticky Notes',  
      price: '#1,435',  
      image: book2
    },  
    {  
      title: 'Design & Print Business Cards',  
      price: '#13,000',  
      image: book3
    },  
  ];  

  return (  
    <div className="bg-gray-100 py-12 ">  
      <div className="container mx-auto">  
        <h2 className="text-3xl font-bold text-center mb-8">  
          Print On-Demand Business Stationery and Supplies  
        </h2>  
        <p className="text-center text-gray-600 mb-10">  
          Make a lasting impression on clients and partners with our premium  
          products. Elevate your business image with branded letterheads,  
          business cards, and customized envelopes. Our stationery solutions  
          convey professionalism and attention to details.  
        </p>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">  
          {services.map((service) => (  
            <div  
              key={service.title}  
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:bg-gray-200  "  
            >  
              <Image  
                src={service.image}  
                alt={service.title}  
                width={200}  
                height={150}  
                className="mb-4"  
              />  
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>  
             
            </div>  
          ))}  
        </div>  
        <div className="text-center mt-8">  
        <Link href="books" > <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">  
            View Products →  
          </button>  </Link> 
        </div>  
      </div>  
    </div>  
  );  
}  

export default Services2; 