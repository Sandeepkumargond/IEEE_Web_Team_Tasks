import React,{useState} from 'react'

export default function Header({getData,searchNews,SearchValue,search}) {

  function addSearch(e){
    console.log(e.target.value)
SearchValue(e.target.value);

  }
  return (
    <>
    <nav className=' p-2 flex flex-col justify-center md:flex-row md:justify-evenly md:p-4 bg-blue-400
'> 
      <h1 className='font-bold text-base'>Trendy News</h1>
      <p>All News  Top Headlines</p>
      <div className='flex flex-row '> 
          <div className="input flex flex-row bg-white rounded-xl shadow-md" >
        <span className="material-symbols-outlined">
search
</span>
       <input type="text" placeholder='What are you looking for?' className='border-none outline-none placeholder-black' onChange={searchNews}  value={search}/>
      </div>
       <button className='mx-1 bg-blue-700 md:mx-7 rounded-md text-white p-px' onClick={getData}>Search</button>
       </div>
    </nav>
     <div>
      <p className='text-lg font-bold md:text-center md:m-4 '>Stay Update with TrendyNews!</p>
      <div className='md:flex flex-row md:justify-center '>
 <button value="Sports" className='  bg-blue-700  rounded-md text-white m-1 md:p-2 md:mx-7' onClick={addSearch}>Sports</button>
     <button value="Politics"className=' bg-blue-700  rounded-md text-white m-1 md:p-2 md:mx-7' onClick={addSearch}>Politics</button>
     <button value="Health"className=' bg-blue-700  rounded-md text-white m-1 md:p-2 md:mx-7' onClick={addSearch}>Health</button>
       <button value="Entertainment"className=' bg-blue-700  rounded-md text-white m-1  md:p-2 md:mx-7' onClick={addSearch}>Entertainment</button>
         <button value="Technology"className=' bg-blue-700  rounded-md text-white m-1 md:p-2 md:mx-7' onClick={addSearch}>Technology</button>
      </div>
    
     </div>


    </>
  )
}
