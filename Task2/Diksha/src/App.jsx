import './App.css'

// importing components 
import Header from './components/Header'
import Footer from './components/Footer'
import NewsList from './components/NewsList'

// importing toast container
import {ToastContainer} from 'react-toastify'

function App() {

  return (
    <div className='w-full'>

      {/* Toast Container */}
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="darks"
      />
    <div className='bg-gray-100'>
    <Header/>
    <NewsList/>
    {/* <NewsCard/> */}
    <Footer/>
    </div>
      
    </div>
  )
}

export default App
