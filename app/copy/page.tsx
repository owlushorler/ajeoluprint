// components/CopyToClipboardButton.js  
"use client"
import { useState } from 'react';  
import copy from 'clipboard-copy';  


const CopyToClipboardButton = ({ text }:any) => {  
  const [isCopied, setIsCopied] = useState(false);  

  const handleCopyClick = async () => {  
    try {  
      await copy(text);  
      setIsCopied(true);  
      // Reset state after 2 seconds  
      setTimeout(() => setIsCopied(false), 2000);  
    } catch (error) {  
      console.error('Failed to copy text to clipboard', error);  
    }  
  };  

  return (  
    <div>
    <div onClick={handleCopyClick}>  
      {isCopied ? <img className='m-4 h-4' src='https://i.ibb.co/cwRxWTv/copy.png'  alt='copy'/> : <img className='m-4 h-4' src='https://i.ibb.co/cwRxWTv/copy.png'  alt='copy'/>}  
    </div> 
    </div> 
  );  
};  

export default CopyToClipboardButton;