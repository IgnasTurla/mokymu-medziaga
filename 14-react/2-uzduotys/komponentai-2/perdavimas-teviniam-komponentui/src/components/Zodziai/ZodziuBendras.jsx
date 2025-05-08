import { useState } from "react";
import ZodziuIvedimas from "./ZodziuIvedimas";

const ZodziuBendras = () => {
    const [zodziai, setZodziai] = useState([]);

    const pridetiZodiValdyklis = (naujasZodis) => {
       setZodziai(prev => [...prev, naujasZodis]);
    }

    const ilgiausiasZodis = () => {
        let didziausiasZodis = {
            index: 0,
            ilgis: zodziai[0].length
        }
        for (let i = 1; i < zodziai.length; i++) {
            if (didziausiasZodis.ilgis < zodziai[i].length) {
                didziausiasZodis = {
                    index: i,
                    ilgis: zodziai[i].length
                }
            }
        }
        return zodziai[didziausiasZodis.index]
    }

    return (
        <div>
            <h2>ZodziuBendras</h2>
            {
                zodziai.length > 0 && (
                    <>
                         <p>Ilgiausias zodis yra: {ilgiausiasZodis()}</p>
                    <ul>
                        {
                            zodziai.map((zodis, index) => <li key={index}>{zodis}</li>)
                        }
                    </ul>
                    </>
                
                )
            }

            {
                zodziai.length === 0 && (
                    <p>Deja, nera ivestos informacijos</p>
                )
            }

            <ZodziuIvedimas 
                pridetiZodi={pridetiZodiValdyklis}/>
        </div>
    )
}

export default ZodziuBendras;