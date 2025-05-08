// import { useRef, useState } from "react";

// const Prekes = () => {
//     const [pavadinimas, setPavadinimas] = useState('');
//     const [kaina, setKaina] = useState('');
//     const [kiekis, setKiekis] = useState('');
//     const [prekes, setPrekes] = useState([]);   

//     const pavadinimasRef = useRef();
//     const kainaRef = useRef();
//     const kiekisRef = useRef();
//     const prekesRef = useRef();

//     const prekeHandler = (event) => {
//         event.preventDefault();

//         const naujaPreke = {
//             pavadinimas: pavadinimasRef.current.value,
//             kaina: kainaRef.current.value,
//             kiekis: kiekisRef.current.value
//         };
//         setPrekes([naujaPreke, ...prekes]);

//         pavadinimasRef.current.value = '';
//         kainaRef.current.value = '';
//         kiekisRef.current.value = '';
//     }

//     return(
//         <div>
//             <h2>Prekes</h2>
//             <form>
//                 <input placeholder="pavadinimas" type="text"/>
//                 <br/>
//                 <input placeholder="kaina" type="number"/>
//                 <br/>
//                 <input placeholder="kiekis" type="number"/>
//                 <br/>
//                 <button>Ivesti</button>
//             </form>
//         </div>
//     )
// };

// export default Prekes;

import { useRef, useState } from "react";

const Prekes = () => {
    const [prekes, setPrekes] = useState([]);
    const MAZAS_KIEKIS = 5;

    const pavadinimasRef = useRef();
    const kainaRef = useRef();
    const kiekisRef = useRef();


  const onFromSubmitHandler = (event) => {
    event.preventDefault();

    setPrekes([
        ...prekes,
        {
            pavadinimas: pavadinimasRef.current.value,
            kaina: kainaRef.current.valueAsNumber,
            kiekis: kiekisRef.current.valueAsNumber,
        }
    ]);
    pavadinimasRef.current.value = null;
    kainaRef.current.value = null;
    kiekisRef.current.value = null;
  };

  const onClearClickHandler = () => {
    setPrekes([]);
  };

  const isvestiMazaiKiekiuPrekiu = () => {
       const prekiuLikuciai = prekes.filter(preke => preke.kiekis < MAZAS_KIEKIS);

       return prekiuLikuciai.length > 0 ? (
        <div>
            <h3>Prekiu likuciai:</h3>
            {
                prekiuLikuciai.map((preke, index) => (
                    <p key={index}>
                       pavadinimas: {preke.pavadinimas}, kaina: {preke.kaina}, kiekis: {preke.kiekis}
                    </p>
               ))
            }
        </div>
       ) : '';
  }

    return(
        <div>
            <h2>Prekes</h2>
            <form onSubmit={onFromSubmitHandler}>
                <input placeholder="pavadinimas" type="text" ref={pavadinimasRef}/>
                <br/>
                <input placeholder="kaina" type="number" ref={kainaRef}/>
                <br/>
                <input placeholder="kiekis" type="number" ref={kiekisRef}/>
                <br/>
                <button type="submit">Ivesti</button>
            </form>

            {
                prekes.length > 0 && (
                    <div>
                        {prekes.map((preke, index) => (
                             <p key={index}>
                                pavadinimas: {preke.pavadinimas}, kaina: {preke.kaina}, kiekis: {preke.kiekis}
                             </p>
                        ))}
                        {isvestiMazaiKiekiuPrekiu()}
                        <button onClick={onClearClickHandler}>Isvalyti prekiu krepseli</button>
                    </div>
                )
            }
            {
                prekes.length === 0 && (
                    <h3>
                        Kol kas nera ivestu prekiu
                    </h3>
                )
            }
        </div>
    )
};

export default Prekes;