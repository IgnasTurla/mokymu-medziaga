import { useState } from "react";

const Zodis = () => {
    const [zodis, setZodis] = useState(' ');

    // const keistiZodi = () => {
    //     setZodis('pomidoras')
    // }
 
    // const keistiZodi2 = () => {
    //     setZodis('agurkas')
    // }

    const keistiZodi = (naujasZodis) => {
        setZodis(naujasZodis);
    }
    

    return(
        <div>
            <h2>Zodis</h2>
            <p>Zodis:{zodis}</p>
            <button onClick={() => keistiZodi('pomidoras')}>keisti i pomidoras</button>
            <button onClick={() => keistiZodi('agurkas')}>keisti i agurkas</button>
        </div>
    )
};

export default Zodis;