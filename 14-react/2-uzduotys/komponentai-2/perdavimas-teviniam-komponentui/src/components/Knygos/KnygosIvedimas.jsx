import { useRef } from "react";

const KnygosIvedimas = (props) => {
    const pavRef = useRef();
    const kainaRef = useRef();
    const metaiRef = useRef();

    const submitHandle = (event) => {
        event.preventDefault();

        const naujaKnyga = {
            pavadinimas: pavRef.current.value,
            kaina: kainaRef.current.valueAsNumber,
            metai: metaiRef.current.valueAsNumber
        };

        props.onAddKnyga(naujaKnyga);

        pavRef.current.value = '';
        kainaRef.current.value = '';
        metaiRef.current.value = '';
    };
     
    return (
        <div>
            <h3>Knygos informacija</h3>
            <form onSubmit={submitHandle}>
                <label htmlFor="knygosPav">Knygos pavadinimas: </label>
                <input id="knygosPav" type="text" ref={pavRef} />

                <label htmlFor="knygosPrice">Knygos kaina: </label>
                <input id="knygosPrice" type="number" ref={kainaRef} />

                <label htmlFor="knygosYear">Knygos metai: </label>
                <input id="knygosYear" type="number" ref={metaiRef} />

                <button type="submit">Ivesti</button>
            </form>
        </div>
    );
};

export default KnygosIvedimas;
