import React, { Component } from 'react'

export class NewsCard extends Component {
  render() {
    let { title, description, ImageUrl, newsUrl } = this.props;
    return (
      <>
        <div className=' flex w-100 h-84 border bg-image-cover m-8 bg-cover rounded mx-25' >
          <div>
            <img src={ImageUrl} alt="" className='w-120 h-48 ' />
            <div>
              <h5 className='text-lg font-serif bg-gradient-to-r from-rose-200 to-indigo-200'>{title}</h5>
              <p className='font-sans text-md mb-2'>{description}</p>
              <a href={newsUrl} target="_blank" className=' w-30 h-10 bg-gradient-to-r from-sky-400 to-indigo-600 px-2 py-1 rounded text-white'>Read More</a>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default NewsCard