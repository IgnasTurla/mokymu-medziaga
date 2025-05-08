import { useState } from "react";
import KnygosIvedimas from "./KnygosIvedimas";
import KnyguSpausdinimas from "./KnyguSpausdinimas";

const KnyguBendras = () => {
    const [knygos, setKnygos] = useState([
        { pavadinimas: 'Rupuze', kaina: 25, metai: 1942 },
        { pavadinimas: 'Batuotas katinas', kaina: 35, metai: 1999 },
        { pavadinimas: 'Brisiaus galas', kaina: 15, metai: 2001 },
    ]);

    const pridetiKnyga = (naujaKnyga) => {
        setKnygos([...knygos, naujaKnyga]);
    };

    const istrintiKnygas = () => {
        setKnygos([]);
    };

    return (
        <div>
            <h2>Knygos</h2>
            <KnygosIvedimas onAddKnyga={pridetiKnyga} />
            <KnyguSpausdinimas knygos={knygos} />
            
            {knygos.length > 0 && (
                <button onClick={istrintiKnygas}>
                    Isvalyti knygas
                </button>
            )}
        </div>
    );
};

export default KnyguBendras;