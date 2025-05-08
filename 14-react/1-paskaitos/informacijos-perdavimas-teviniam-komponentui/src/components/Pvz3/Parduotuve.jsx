import { useState } from "react";
import Pridejimas from "./Pridejimas";
import VisosPrekes from "./VisosPrekes";

const Parduotuve = () => {
    // const TEST_PREKES = [
    //     {pavadinimas: 'knyga', kiekis: 5, kaina: 10},
    //     {pavadinimas: 'vanduo', kiekis: 3, kaina: 1},
    //     {pavadinimas: 'tv', kiekis: 2, kaina: 1055},
    //     {pavadinimas: 'lapas', kiekis: 55, kaina: 10},
    //     {pavadinimas: 'pienas', kiekis: 51, kaina: 102},
    // ]
    const [prekes, setPrekes] = useState([]);

    const handlePrekesPridejimas = (newItem) => {
        setPrekes([...prekes, newItem])
    };

    const isvalytiPrekes = () => {
        setPrekes([]); 
    };

    return(
        <div>
            <h2>Parduotuve</h2>
            <Pridejimas
               pridetiPreke={handlePrekesPridejimas}
               isvalytiPrekes={isvalytiPrekes}/>
            <VisosPrekes data={prekes}/>
        </div>
    )
};

export default Parduotuve;