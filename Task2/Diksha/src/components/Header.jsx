import React from 'react'
import NewsHeadlines from './NewsHeadlines'

function Header() {
  return (
    <section className='w-full px-2 py-3 pb-6 bg-blue-950 flex flex-col gap-8'>
      <div className='w-[90%] mx-auto'>

        {/* header section */}
          <div className='flex flex-col gap-2 items-center justify-center'>
            <h1 className='text-4xl font-semibold text-white tracking-wide'>NewsNow</h1>
            <p className='text-gray-300 text-lg'>Live. Trusted. Fast.</p>
          </div>
      </div>

      {/* headlines section component */}
      <div className='bg-indigo-950 flex gap-5 items-center w-[90%] lg:w-[80%] mx-auto px-3 py-2 rounded-xl'>
        <p
        className='text-orange-500 min-w-fit font-semibold'>BREAKING NEWS</p>
        <NewsHeadlines/>
      </div>
      

    </section>
  )
}

export default Header