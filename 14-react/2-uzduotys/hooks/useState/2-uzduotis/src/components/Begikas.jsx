import { useState } from "react";

const Begikas = () => {
    const [pirmas, setPirmas] = useState('');
    const [antras, setAntras] = useState('');

    const pirmasHandler = (event) => {
        setPirmas(event.target.value)
    }

    const antrasHandler = (event) => {
        setAntras(event.target.value)
    }

    const kurisGreitesnis = () => {
        let rezultatas = pirmas - antras;

        if (pirmas > antras) {
            return `Antras begikas buvo greitesnis - ${Math.abs(rezultatas)} sec.`
        } else if (pirmas < antras) {
            return `Pirmas begikas buvo greitesnis - ${Math.abs(rezultatas)} sec.`
        } else {
            return 'Abu atbego tuo paciu laiku'
        }
    }

    return(
        <div>
            <h2>Begikai</h2>
            <label htmlFor="pirmasBegikas">Pirmas</label>
            <input onChange={pirmasHandler} type="number" id="pirmasBegikas"/>
            <label htmlFor="antrasBegikas">Antras</label>
            <input onChange={antrasHandler} type="number" id="antrasBegikas"/>
            <p>Laikas pirmas: {pirmas}</p>
            <p>Laikas antras: {antras}</p>
            <p>Kuris buvo greitesnis: {kurisGreitesnis()}</p>
        </div>
    )
};

export default Begikas;