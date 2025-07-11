import React from 'react'

function Footer() {
  return (
    <footer className='w-full text-center fixed bottom-0 bg-blue-950 py-1 items-center flex flex-col'>

        <p className='text-white'><span className='text-orange-400 italic font-semibold text-xl'>NewsNow</span> by <span className='font-medium text-lg'>Diksha Bharti</span></p>

        <p className='text-white'>&copy; {new Date().getFullYear()} All rights reserved.</p>

    </footer>
  )
}

export default Footer