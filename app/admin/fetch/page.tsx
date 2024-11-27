"use client"
const API_URL = 'https://ajeolu-backend.onrender.com/user';  

export const fetchPosts = async () => {  
  const res = await fetch(API_URL);  
  return res.json();  
};  

export const createPost = async (post:any) => {  
  const res = await fetch(API_URL, {  
    method: 'POST',  
    headers: { 'Content-Type': 'application/json' },  
    body: JSON.stringify(post),  
  });  
  return res.json();  
};  

export const updatePost = async (id:any, post:any) => {  
  const res = await fetch(`${API_URL}/${id}`, {  
    method: 'PUT',  
    headers: { 'Content-Type': 'application/json' },  
    body: JSON.stringify(post),  
  });  
  return res.json();  
};  

export const deletePost = async (id:any) => {  
  const res = await fetch(`${API_URL}/${id}`, {  
    method: 'DELETE',  
  });  
  return res.json();  
};