import Diena from './Diena'

const Savaite = () => {
    let temperaturos = [14, 22, 55, 23, 77, 12, -25];
    return (
        <div>
            <h1>Savaite</h1>
            {
                temperaturos.map((temperatura, i) => 
                <Diena key={i} temp={temperatura}/>)
            }
        </div>
    )
}

export default Savaite;