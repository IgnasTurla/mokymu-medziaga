import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0); 

  return (
    <>
      <Header />

      <div className='card'> 
        <button onClick={() => setCount(count + 1)}>
          kiek paspaudimu {count}
        </button>
      </div>

      <Footer />
    </>
  );
}

export default App;
