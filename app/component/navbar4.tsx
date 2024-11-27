import React from 'react'; 
import frame from "../images/frameall.jpg"
import Image from 'next/image';
import frameicon from "../images/frameIcon.png"
import frame2 from "../images/images.png"
import frame3 from "../images/download.png"
import frame4 from "../images/download.png"
import frame5 from "../images/download (1).png"
import fram6 from "../images/download (2).png"




function Services1() {  
  const services = [  
    { icon:   frameicon, title: 'Frames & Wall Arts' },  
    { icon: frame2, title: 'Signage & 3D Displays' },
    { icon: frame3, title: 'label and Packaging' }, 
    { icon: frame4, title: 'Gifting Items' }, 
    { icon: frame5, title: 'Custom Apparels' }, 
    { icon: fram6, title: 'Web designing' },
    // ... other services  
  ];  

  return (  
    <div className="container mx-auto p-4  ">  
      <div className="flex flex-wrap justify-center gap-4 ">  
        {services.map((service, index) => (  
          <div key={index} className="flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-400  ">  
            <Image  src={service.icon} alt={service.title} className="w-5 h-5" /> 
           {/* <h1> {service.icon } &#128231; </h1> */}
                  
            
            <h3 className="text-sm">{service.title}</h3>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
}  

export default Services1;