import React, { Component } from 'react'

import {
  Link
} from "react-router-dom";
export class Header extends Component {
  render() {
    return (
      <>
        <div className=''>
          <nav className='flex text-blue-800 text-2xl font-serif'>
            <h1 className='flex justify-center items-center p-4 mr-0 text-4xl text-left font-bold font-serif'>NewsNow</h1>
            <Link to="/" className='flex justfy-center items-center ml-50'>Home</Link>
            <Link to="/entertainment" className='flex justfy-center items-center ml-5'>Entertainment</Link>
            <Link to="/health" className='flex justfy-center items-center ml-5'>Health</Link>
            <Link to="/science" className='flex justfy-center items-center ml-5'>Science</Link>
            <Link to="/sports" className='flex justfy-center items-center ml-5'>Sports</Link>
            <Link to="/technology" className='flex justfy-center items-center ml-5'>Technology</Link>

          </nav>
        </div>
      </>
    )
  }
}

export default Header