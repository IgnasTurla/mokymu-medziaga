import { useState } from "react";

const Komp5 = () => {
    let [selection, setSelection] = useState('nepasirinkta');

    const pasirinkimoHandler = () => {
       let pasirinktaReiksme = event.target.innerText;

       setSelection(pasirinktaReiksme)
    }

    const tikrinti = () => {
        switch (selection) {
            case 'HTML' :
                return 'HTML - tai zymejimo kalba';
                case 'CSS' :
                    return 'CSS - tai stiliaus kalba';
                    case 'JAVASCRIPT' :
                        return 'JAVASCRIPT - tai programavimo kalba';
                        case 'REACT' :
                            return 'REACT - tai javascript biblioteka';
                            default:
                                return 'Nepasirinkta';
                                   
        }
    }

    return(
        <div>
            {/* <Komp2 pasirinkimas={selection}/> */}
            <h2>Komp5</h2>
            <h4>Pasirinkimas</h4>
            <p>Labiausiai patikos</p>
            <button onClick={pasirinkimoHandler}>HTML</button>
            <button onClick={pasirinkimoHandler}>CSS</button>
            <button onClick={pasirinkimoHandler}>JAVASCRIPT</button>
            <button onClick={pasirinkimoHandler}>REACT</button>
            <p>Pasirinkote: {selection}</p>
            <p>{tikrinti()}</p>
        </div>
    )
};

export default Komp5;