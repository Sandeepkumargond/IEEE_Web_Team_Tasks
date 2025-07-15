import React, { Component } from 'react'
import NewsCard from './NewsCard'
import PropTypes from 'prop-types'

export class NewsList extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  handlePrevClick = async () => {
    console.log("prev")

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=b6117a50547a46daa8ea513a8a5f5cff&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1
    })

  }
  handleNextClick = async () => {
    console.log("next")
    if (this.state.page + 1 > Math.ceil(this.state.totalresults / this.props.pageSize)) {

    }
    else {

      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=b6117a50547a46daa8ea513a8a5f5cff&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1

      })
    }
  }

  async componentDidMount() {

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=b6117a50547a46daa8ea513a8a5f5cff&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalresults: parsedData.totalresults })
  }
  render() {
    return (
      <>
        <h2 className='flex justify-center items-center font-serif text-lg'>NewsNow - Top HeadLines</h2>
        <div className='flex flex-wrap'>
          {this.state.articles.map((element) => {
            return <div className='flex' key={element.url}>
              <NewsCard className='' title={element.title.slice(0, 40)} description={element.description} ImageUrl={element.urlToImage} newsUrl={element.url} />
            </div>

          })}
        </div>
        <div className='flex justify-between'>
          <button className='bg-gradient-to-r from-rose-200 to-indigo-300 px-5 font-serif text-bold text-md' disabled={this.state.page <= 1} onClick={this.handlePrevClick}>Previous</button>
          <button className='bg-gradient-to-r from-rose-200 to-indigo-300 px-5 font-serif text-bold text-md' disabled={this.state.page + 1 > Math.ceil(this.state.totalresults / this.props.pageSize)} onClick={this.handleNextClick}>Next</button>
        </div>
      </>
    )
  }
}

export default NewsList
