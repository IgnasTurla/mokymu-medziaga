import './App.css'
// import Komp1 from './components/Komp1'
// import TekstoBendras from './components/Pvz1/TekstoBendras' 
import Parduotuve from './components/Pvz2/Parduotuve'
import Paslaugos from './components/Pvz3/Paslaugos'
import Grupe from './components/Pvz4/Grupe'
import Imone from './components/Pvz5/Imone'
import Savaite from './components/Pvz6/Savaite'
import Servisas from './components/Pvz7/Servisas'
function App() {
  // let vardas = "Petras"
  


  return (
    <>
     {/* <Komp1 
     name="jonas"
     vardas = {vardas}
     /> */}
     {/* <TekstoBendras />
     <hr/> */}
     <Parduotuve />
     <hr/>
     <Paslaugos />
     <hr/>
     <Grupe/>
     <hr/>
     <Imone/>
     <hr/>
     <Savaite/>
     <hr/>
     <Servisas/>
    </>
  )
}

export default App
