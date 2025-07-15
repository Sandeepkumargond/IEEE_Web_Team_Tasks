
import './App.css'
import Header from './components/Header.jsx'
import NewsList from './components/NewsList.jsx'
import React, { Component } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header />
       
        <Routes>
           <Route exact path="/" element={<NewsList key="general" pageSize={10} country="in" category="general" / >} />
          
            <Route exact path="/entertainment" element={<NewsList key="entertainment" pageSize={10} country="in" category="entertainment" / >} />
            <Route exact path="/health" element={<NewsList key="health" pageSize={10} country="in" category="health" / >} />
            <Route exact path="/science" element={<NewsList key="science" pageSize={10} country="in" category="science" / >} />
            <Route exact path="/sports" element={<NewsList key="sports" pageSize={10} country="in" category="sports" / >} />
            <Route exact path="/technology" element={<NewsList key="technology" pageSize={10} country="in" category="technology" / >} />
          {/* <Route path="/"><NewsList pageSize={10} country="in" category="general" / ></Route>
          <Route path="/bussiness"><NewsList pageSize={10} country="in" category="bussiness" / ></Route>
          <Route path="/entertainment"><NewsList pageSize={10} country="in" category="entertainment" / ></Route>
          <Route path="/health"><NewsList pageSize={10} country="in" category="health" / ></Route>
          <Route path="/science"><NewsList pageSize={10} country="in" category="science" / ></Route>
          <Route path="/sports"><NewsList pageSize={10} country="in" category="sports" / ></Route>
          <Route path="/technology"><NewsList pageSize={10} country="in" category="technology" / ></Route> */}
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App
