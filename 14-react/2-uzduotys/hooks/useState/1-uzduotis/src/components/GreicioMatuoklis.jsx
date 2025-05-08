import { useState } from "react";

const GreicioMatuoklis = () => {
    const [greitis, setGreitis] = useState(0)
    const [pranesimas, setPranesimas] = useState('')

    const skirtingiGreiciai = (value) => {
        setGreitis(value);
        setPranesimas(
            value <= 0 ? 'greitis yra 0, stovite vietoje' :
            value <= 25 ? 'Vaziuojate letai' :
            value <= 100 ? 'Vaziuojate greitai' :
            value <= 200 ? 'Lekiate su vejeliu!' : ' '
        )
    }

    return(
        <div>
            <h2>Greicio matuoklis</h2>
            <p>Greitis: {greitis} pranesimas:{pranesimas} km/h</p>
            <button onClick={() => skirtingiGreiciai(0)}>Greitis 0 km/h</button>
            <button onClick={() => skirtingiGreiciai(25)}>Greitis 25 km/h</button>
            <button onClick={() => skirtingiGreiciai(100)}>Greitis 100 km/h</button>
            <button onClick={() => skirtingiGreiciai(200)}>Greitis 200 km/h</button>
        </div>
    )
};

export default GreicioMatuoklis;