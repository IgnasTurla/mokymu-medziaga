import { useState } from "react";
import KnygosIvedimas from "./KnygosIvedimas";
import KnyguSpausdinimas from "./KnyguSpausdinimas";

const ImoneBendras = () => {
    const [darbuotojai, setDarbuotojai] = useState([
        { vardas: 'Rupuze', pavarde: 25, pareigos: 1942, atlyginimas: },
        { pavadinimas: 'Batuotas katinas', kaina: 35, metai: 1999 },
        { pavadinimas: 'Brisiaus galas', kaina: 15, metai: 2001 },
    ]);

    const pridetiDarbuotoja = (naujasDarbuotojas) => {
        setDarbuotojai([...darbuotojai, naujasDarbuotojas]);
    };

    const istrintiDarbuotojus = () => {
        setDarbuotojai([]);
    };

    return (
        <div>
            <h2>Darbuotojai</h2>
            <KnygosIvedimas onAddDarbuotojas={pridetiDarbuotoja} />
            <KnyguSpausdinimas knygos={knygos} />
            
            {knygos.length > 0 && (
                <button onClick={istrintiDarbuotojus}>
                    Isvalyti darbuotojus
                </button>
            )}
        </div>
    );
};

export default ImoneBendras;