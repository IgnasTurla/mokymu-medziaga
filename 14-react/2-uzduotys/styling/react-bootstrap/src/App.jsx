import './App.css'
import Cards from './components/card/Cards'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <Header />
      <div className='title'>
      <h1>Pricing</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus sint hic sunt assumenda quo laboriosam facilis cum ex magni? Optio omnis alias accusantium. Libero fugiat ipsum natus similique a provident?</p>
      </div>
    
      <Cards/>
      <Footer/>
    </>
  )
}

export default App;
