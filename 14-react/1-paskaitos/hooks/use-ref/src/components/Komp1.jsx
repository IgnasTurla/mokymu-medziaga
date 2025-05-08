import { useState, useRef } from "react";

const Komp1 = () => {
    const [salis, setSalis] = useState('');
    const salisInputRef = useRef();

    const onIvestiClick = () => {
        setSalis(salisInputRef.current.value)

    }

    return(
        <div>
            <h2>Komp1</h2>
            <h4>Megstamiausia salis</h4>
            <div>
                <label htmlFor="salis">Iveskite sali</label>
                <input ref={salisInputRef} type="text" id="salis"/>
                <button onClick={onIvestiClick}>Ivesti</button>
            </div>
            <p>Jus ivedete: <strong>{salis}</strong></p>
        </div>
    )
};

export default Komp1;