import { useRef } from "react";
import { useState } from "react";

const MedzioApdirbejas = () => {
    const [kaina, setKaina] = useState('');
    const [valandos, setValandos] = useState('');
    const [valandinisUzdarbis, setValandinisUzdarbis] = useState('');

    const kainaRef = useRef();
    const valandosRef = useRef();
    const valandinisUzdarbisRef = useRef();

    const magicNumber = 1.6;

const onClickHandler = () => {
    setKaina(kainaRef.current.valueAsNumber);
    setValandos(valandosRef.current.valueAsNumber);
    setValandinisUzdarbis(valandinisUzdarbisRef.current.valueAsNumber);

    kainaRef.current.value = '';
    valandosRef.current.value = '';
    valandinisUzdarbisRef.current.value = '';
}

const skaiciuotiSavikaina = () => {
    return (valandos * valandinisUzdarbis) + kaina;
  };

  const skaiciuotiPardavimoKaina = () => {
    return skaiciuotiSavikaina() * magicNumber
  };



    return(
        <div>
            <h2>Medzio apdirbejas</h2>
            <p>Kiek kainavo visos medziagos:</p>
            <input type="number" placeholder="Kaina" ref={kainaRef}/>
            <br/>
            <p>Kiek valandu dirbo:</p>
            <input type="number" placeholder="Valandos" ref={valandosRef}/>
            <br/>
            <p>Valandinis uzdarbis:</p>
            <input type="number" placeholder="Uzdarbis" ref={valandinisUzdarbisRef}/>
            <br/>
            <button onClick={onClickHandler}>Ivesti</button>
           {
                kaina && valandos && valandinisUzdarbis &&
                <>
           <p>Kaina uz medziagas: {kaina} Darbo valandos:{valandos} valandinis uzdarbis: {valandinisUzdarbis}</p>
           <p>Projekto savikaina: {skaiciuotiSavikaina()}</p>
           <p>Rekomenduojama pardavimo kaina: {skaiciuotiPardavimoKaina().toFixed(2)} €</p>
           </>
           }
        </div>
    )
};

export default MedzioApdirbejas;