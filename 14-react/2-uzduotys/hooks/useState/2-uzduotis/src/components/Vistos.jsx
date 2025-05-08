import { useState } from "react";

const Vistos = () => {
    const uzsakymai = 100;
    const [kiausiniai, setKiausiniai] = useState('');

    const kiausiniuHandler = (event) => {
        setKiausiniai(event.target.value)
    }
    
    const dienosUzsakymai = () => {
        let skirtumas = kiausiniai - uzsakymai;

        if (skirtumas > 0) {
            return `Kiausiniu uzteks ir bus perteklius ${skirtumas}`
        } else {
            return `Kiausiniu neuzteks reikes dar ${Math.abs(skirtumas)}`
        }
    };

    return(
        <div>
            <h2>Vistos</h2>
            <label htmlFor="inputFor">Kiausiniai</label>
            <input onChange={kiausiniuHandler} type="number" id="inputFor"/>
            <p>Dienos kiausiniu uzsakymas: {uzsakymai}</p>
            <p>Kiausiniai: {dienosUzsakymai()}</p>
        </div>
    )
};

export default Vistos;