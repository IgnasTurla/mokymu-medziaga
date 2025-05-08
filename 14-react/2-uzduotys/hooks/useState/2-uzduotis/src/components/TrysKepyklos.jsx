import { useState } from "react";

const TrysKepyklos = () => {
    const [diena, setDiena] = useState('');
    const [pirmas, setPirmas] = useState('');
    const [antras, setAntras] = useState('');
    const [trecias, setTrecias] = useState('');

    const uzsakymuHandler = (event) => {
        setDiena(event.target.value);
        setPirmas(event.target.value);
        setAntras(event.target.value);
        setTrecias(event.target.value)
    }

    return(
        <div>
            <h2>Trys Kepyklos</h2>
            <label htmlFor="inputUzsakymai">Dienos Uzsakymu kiekis: </label>
            <input onChange={uzsakymuHandler(setDiena)} type="number" id="inputUzsakymai"/>
            <br/>

            <label htmlFor="inputUzsakymai1">Pirma kepykla </label>
            <input onChange={uzsakymuHandler(setPirmas)} type="number" id="inputUzsakymai1"/>
            <br/>
            <label htmlFor="inputUzsakymai2">Antra kepykla </label>
            <input onChange={uzsakymuHandler(setAntras)} type="number" id="inputUzsakymai2"/>
            <br/>
            <label htmlFor="inputUzsakymai3">Trecia kepykla </label>
            <input onChange={uzsakymuHandler(setTrecias)} type="number" id="inputUzsakymai3"/>

            <p>Dienos uzsakymai: {diena}</p>
            <p>Pirma kepykla: {pirmas}</p>
            <p>Antra kepykla: {antras}</p>
            <p>Trecia kepykla: {trecias}</p>
        </div>
    )
};

export default TrysKepyklos;