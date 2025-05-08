import './App.css'
import Pasaulis from './components/PasaulioInfo/Pasaulis'
import VisosRoles from './components/Roles/VisosRoles'
import Imone from './components/Bonusai/Imone'
import Pardavejas from './components/AutoPardavejas/Pardavejas'
import HobiuParduotuve from './components/Deliones/HobiuParduotuve'
import Studentas from './components/StudentoInfo/Studentas'
import Mokymai from './components/MokymuInfo/Mokymai'

function App() {
  

  return (
    <>
    <Pasaulis/>
    <hr/>
    <VisosRoles/>
    <hr/>
    <Imone/>
    <hr/>
    <Pardavejas/>
    <hr/>
    <HobiuParduotuve/>
    <hr/>
    <Studentas/>
    <hr/>
    <Mokymai/>
    </>
  )
}

export default App
