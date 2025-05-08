import { useState } from "react";
import ProgramavimoKalba from "./ProgramavimoKalba";

const Renkames = () => {
    const [kalba, setKalba] = useState('nepasirinkta');

    const gautaKalba = (kalba) => {
        console.log('Tevas: ' + kalba);
        setKalba(kalba);
    };

    const kalbosIvertinimas = () => {
        switch(kalba) {
            case 'JavaScript':
                return 'Panasu kad moki react';
            case 'PHP':
                return 'Tiketina moki symfony';
            case 'C#':
                return 'Manau, megsti MS produktus'
            default: 
                return 'Nepasirinkai kalbos negaliu ivertinti'
        }
    }

    return(
        <>
           <h3>Renkames kalba</h3>
           <p>Jus pasirinkote kalba: <strong>{kalba}</strong></p>
           <ProgramavimoKalba
            kalbosPasirinkimas={gautaKalba}/>
            <p>{kalbosIvertinimas()}</p>
        </>
    )
};

export default Renkames;