"use client"
import { useEffect, useState } from 'react';  
import { fetchPosts, createPost, updatePost, deletePost } from "../fetch/page";  

export default function Home() {  
  const [posts, setPosts] = useState([]);  
  const [title, setTitle] = useState('');  
  const [ picture, setpicture] = useState(''); 
  const [ name, setname] = useState(''); 
  const [   price, setprice] = useState(''); 
  const [ bonus, setbonus] = useState(''); 
  const [ads , setads] = useState(''); 
  const [editing, setEditing] = useState(null);

  const [fil , setfilt] = useState('wallArt'); 
  const [all , setall] = useState(false)
  
  

  useEffect(() => {  
    loadPosts();  
  }, []) ;  

  const loadPosts = async () => {  
    const data = await fetchPosts();  
    setPosts(data);  
  };  

  const handleSubmit = async (e:any) => {  
    e.preventDefault();  
    if (editing) {  
      await updatePost(editing, { title, picture, name, price, bonus, ads });  
    } else {  
      await createPost({ title, picture, name, price, bonus, ads });  
    }  
    loadPosts();   
    setTitle('');  
    setpicture('');  
    setname("")
    setbonus("")
    setprice("")
    setads("")
    setEditing(null);  
  };  

  const handleEdit = (post:any) => {  
    setTitle(post.title);  
    setpicture(post.picture); 
    setname(post.name);
    setprice(post.price);
    setbonus(post.bonus);
    setads(post.ads); 
    setEditing(post._id);  
  };  

  const handleDelete = async (id:any) => {  
    await deletePost(id);  
    loadPosts();  
  };  

  const filt = posts.filter((ele)=>ele.title == fil)

  return (  
    <div className='bg-red-700 m-6 p-6 ' > 


   
       
      <form className='m-6  flex flex-col gap-3 w-96   ' onSubmit={handleSubmit}>  
      <textarea  
          value={title}  
          onChange={(e) => setTitle(e.target.value)}  
          placeholder="title"  
          required  
        /> 
        <textarea  
          value={picture}  
          onChange={(e) => setpicture(e.target.value)}  
          placeholder="picture"  
          required  
        /> 
          <input  
          type="text"  
          value={name}  
          onChange={(e) => setname(e.target.value)}  
          placeholder="name"  
          required  
        />
          <input  
          type="text"  
          value={price}  
          onChange={(e) => setprice(e.target.value)}  
          placeholder="price"  
          required  
        />
          <input  
          type="text"  
          value={bonus}  
          onChange={(e) => setbonus(e.target.value)}  
          placeholder="bonus"  
          required  
        />
             <select onChange={(e)=>setads(e.target.value)} value={title}>
                <option value="" >ads</option>
                <option value="true" >true</option>
                <option value="false" >false</option>
        </select>
        <button type="submit">{editing ? 'Update' : 'Create'}</button>  
      </form>  

      
     {!all &&  <ul>  
        <div  onClick={()=>setall(true)} className='bg-black text-white w-52 m-6 hover:cursor-pointer' > filter by title </div> 
        {posts.map((post) => (  
            <div>
               
          <li key={post._id}>  
            <h3 className='bg-green-500 w-64' >{post.title}</h3>  
            <img className='w-44 h-44' src={post.picture} alt={post.name}/>  
            <h3>{post.name}</h3>  
            <h3>{post.price}</h3>  
            <h3>{post.bonus}</h3>  
            <h3>{post.ads}</h3>   
            <button className='bg-red-500 ' onClick={() => handleEdit(post)}>Edit</button>  
            <button className='bg-blue-600' onClick={() => handleDelete(post._id)}>Delete</button>  
          </li>  
          </div>
        ))}  
      </ul> }

       {all && <div className='bg-red-700 m-6 p-6' >
        <div  onClick={()=>setall(false)} className='bg-black text-white w-52 m-6 hover:cursor-pointer' > view all</div>
            <select onChange={(e)=>setfilt(e.target.value)}>
                <option value="" >filter</option>
                <option value="wallArt" >wallArt</option>
                <option value="Office Branding" >Office Branding</option>
                <option value="Card And Invitation" >Card And Invitation</option>
                <option value="Books and Magazines">Books and Magazines</option>
                <option value="Shirt And Card" >Shirt And Card</option>
                <option value="Banner Stand Award and Trophies " >Banner Stand Award and Trophies</option>
                
            </select>
         {filt.map((post) => (  
          <li key={post._id}>  
            <h3 className='bg-green-500 w-64' >{post.title}</h3>  
            <img className='w-44 h-44' src={post.picture} alt={post.name}/>  
            <h3>{post.name}</h3>  
            <h3>{post.price}</h3>  
            <h3>{post.bonus}</h3>  
            <h3>{post.ads}</h3>   
            <button className='bg-red-500 ' onClick={() => handleEdit(post)}>Edit</button>  
            <button className='bg-blue-600' onClick={() => handleDelete(post._id)}>Delete</button>  
          </li>  
        ))}  
        </div>}


    </div>  
  );  
}