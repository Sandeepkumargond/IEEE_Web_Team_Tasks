import React from 'react'

export default function NewsCard({news}) {
  console.log(news);
  return (
<div className='flex flex-col md:flex-row flex-wrap'>
  {
  news.map((curItem,index)=>{
    if(!curItem.urlToImage){
      return ;
    }
      return(
        <div className=' mx-auto md:max-w-sm
   md:m-4 rounded-xl border relative border-black' key={index}>
       <img src={curItem.urlToImage} alt="News" className='w-full rounded-xl' />
       <div className='p-3'>
        <a href="" onClick={()=>{
          window.open(curItem.url);
        }}><b>{curItem.title}</b></a>
        <p className='mb-px'>{curItem.description}</p>
        <button className='text-white bg-blue-500 rounded-sm  bottom-0 left-0 m-2' onClick={()=>{
          window.open(curItem.url);
        }}>Read More</button>
       </div>


        </div>
      )
    })
  }
</div>
  )
}
