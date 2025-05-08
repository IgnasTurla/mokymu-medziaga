import { useState } from "react";

const Komp2 = () => {
    let zodziai = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau'];
    let [istrauktas, setIstrauktas] = useState('===');

    const gautiRandomZodi = () => {
        let randomIndex = Math.floor(Math.random() * zodziai.length);

        setIstrauktas(zodziai[randomIndex]);
    }

    return(
        <div>
            <h2>Komp2</h2>
            <h4>Random zodis</h4>
            <button onClick={gautiRandomZodi}>Traukti</button>
            <p>Value: {istrauktas}</p>
        </div>
    )
};

export default Komp2;