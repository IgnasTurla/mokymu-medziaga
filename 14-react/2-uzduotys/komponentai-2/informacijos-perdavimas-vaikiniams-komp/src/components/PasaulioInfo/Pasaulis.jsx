import Salis from './Salis'

const Pasaulis = () => {
    const Salys = [
        {pavadinimas: 'Lietuva', zemynas: 'Europa'},
        {pavadinimas: 'Jav', zemynas: 'Siaures Amerika'},
        {pavadinimas: 'Japonija', zemynas: 'Azija'}
    ];

    return (
        <div>
            <h1>Pasaulis</h1>
           
            {
                Salys.map((salis, i) => <Salis key={i} salis={salis}/>)
            }
               
            
        </div>
    )
};

export default Pasaulis;