import Preke from './Preke';

const Parduotuve = () => {
    let prekes = [
        {id: 1, pavadinimas: 'Obuoliai', kaina: 10, kiekis: 111},
        {id: 2, pavadinimas: 'Kriauses', kaina: 12, kiekis: 123},
        {id: 3, pavadinimas: 'Citrinos', kaina: 110, kiekis: 144}
    ];

    return (
        <div>
           <h1>Parduotuve</h1>  
             
             {
                prekes.map((item) => 
                <Preke 
                    key={item.id}
                    pavadinimas={item.pavadinimas} 
                    kaina={item.kaina} 
                    kiekis={item.kiekis} 
                     />
                )
             }
        </div>
    );
};

export default Parduotuve;
