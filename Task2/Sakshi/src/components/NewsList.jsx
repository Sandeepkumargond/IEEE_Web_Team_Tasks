import React, { useState } from 'react'
import NewsCard from './NewsCard';
import Header from './Header';
import { useEffect } from 'react';

export default function NewsList() {
  const[search,setSearch]=useState("india");
  const [News,SetNews]=useState([]);

  
  const getData=async()=>{
 const APIkey='13a07c89a66d43bfbbc65f1d5ea6c7ee';
   await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${APIkey}`)
   .then((res)=>res.json())
   .then((data)=>{
    console.log(data);
    SetNews(data.articles);
   })
  }
  
 function handleNews(e){
    setSearch(e.target.value);
  }
useEffect(()=>{
getData();
},[])

 
  return (
 <>
<Header getData={getData} searchNews={handleNews} SearchValue={setSearch} search={search} />
 <NewsCard news={News}/>
 </>
  )
}
