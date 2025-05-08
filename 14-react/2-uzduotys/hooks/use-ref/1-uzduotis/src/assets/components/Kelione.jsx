import { useState, useRef } from "react";

const Kelione = () => {
    const [kilometrai, setKilometrai] = useState('');
    const [sanaudos, setSanaudos] = useState('');
    const [kaina, setKaina] = useState('');
    
    // Kiekvienam laukui priskiriame atskirus ref
    const kilometraiRef = useRef();
    const sanaudosRef = useRef();
    const kainaRef = useRef();

    const onIvestiClick = () => {
        setKilometrai(kilometraiRef.current.valueAsNumber);
        setSanaudos(sanaudosRef.current.valueAsNumber);
        setKaina(kainaRef.current.valueAsNumber);

        // Valome laukus po įvedimo
        kilometraiRef.current.value = '';
        sanaudosRef.current.value = '';
        kainaRef.current.value = '';
    }

    const kiekKuroIsnaudota = () => {
        return (kilometrai / 100) * sanaudos;
           
    }

    const kuroKaina = () => {
       return kiekKuroIsnaudota() * kaina;
           
    }

    return(
        <div>
            <h2>Kelione</h2>
            <p>Kiek kilometru reikes nuvaziuoti:</p>
            <input type="number" placeholder="Kilometrai" ref={kilometraiRef}/>
            <br/>
            <p>Vidutines kuro sanaudos 100km:</p>
            <input type="number" placeholder="Kuro sanaudos" ref={sanaudosRef}/>
            <br/>
            <p>Kuro kaina uz litra:</p>
            <input type="number" placeholder="Kaina" ref={kainaRef}/>
            <br/>
            <button onClick={onIvestiClick}>Skaiciuoti</button>
            {
                kilometrai && sanaudos && kaina &&
                <>
                 <p>Kilometrai: {kilometrai} Sanaudos: {sanaudos} Kaina: {kaina}</p>
                 <p>Kuro sanaudos: {kiekKuroIsnaudota().toFixed(2)} Kuro kaina: {kuroKaina().toFixed(2)}</p>
                </>
            }
           
        </div>
    )
};

export default Kelione;