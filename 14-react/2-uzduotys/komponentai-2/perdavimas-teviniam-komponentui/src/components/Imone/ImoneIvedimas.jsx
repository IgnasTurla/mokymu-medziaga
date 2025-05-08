import { useRef } from "react";

const ImoneIvedimas = (props) => {
    const pavRef = useRef();
    const kainaRef = useRef();
    const metaiRef = useRef();

    const submitHandle = (event) => {
        event.preventDefault();

        const naujasDarbuotojas = {
            pavadinimas: pavRef.current.value,
            kaina: kainaRef.current.valueAsNumber,
            metai: metaiRef.current.valueAsNumber
        };

        props.onAddDarbuotojas(naujasDarbuotojas);

        pavRef.current.value = '';
        kainaRef.current.value = '';
        metaiRef.current.value = '';
    };
     
    return (
        <div>
            <h3>Darbuotojo informacija</h3>
            <form onSubmit={submitHandle}>
                <label htmlFor="darbPav">Knygos pavadinimas: </label>
                <input id="darbPav" type="text" ref={pavRef} />

                <label htmlFor="darbPrice">Knygos kaina: </label>
                <input id="darbPrice" type="number" ref={kainaRef} />

                <label htmlFor="darbYear">Knygos metai: </label>
                <input id="darbYear" type="number" ref={metaiRef} />

                <button type="submit">Ivesti</button>
            </form>
        </div>
    );
};

export default ImoneIvedimas;
