import './Paslaugos.css'
import Paslauga1 from './komponentai/Paslauga1'
import Paslauga2 from './komponentai/Paslauga2'
import Paslauga3 from './komponentai/Paslauga3'

const Paslaugos = () => {

    return (
        <>
        <div className='paslaugos'>
        <Paslauga1 />
        <Paslauga2 />
        <Paslauga3 />
        </div>
        </>
    )
}

export default Paslaugos;