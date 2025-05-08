import { useState } from "react";

const Zuikis = () => {
    const [arPersoko, setArPersoko] = useState(false);
   
    const persoktiAtsitiktinai = () => {
        const atsitiktineReiksme = Math.random() < 0.5;
        setArPersoko(atsitiktineReiksme)
    }

    const garantuotaiPersoko = () => {
        setArPersoko(true)
    }


    return(
        <div>
            <h2>Zuikis</h2>
            <p>Ar zuikis peršoko griovį: {arPersoko ? 'Taip' : 'Ne'}</p>
            <button onClick={() => persoktiAtsitiktinai()}>Atsitiktinis sokimas</button>
            <button onClick={garantuotaiPersoko}>Garantuotas persokimas</button>

        </div>
    )
};

export default Zuikis;