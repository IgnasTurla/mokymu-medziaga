
const Komp8 = () => {
    let antraste = 'aprekiu sarasas'
    let prekes = [
         {id:1, pavadinimas: 'tusinukas', kaina: 2.55, kiekis: 221},
         {id:2, pavadinimas: 'vanduo', kaina: 1.55, kiekis: 23},
         {id:3, pavadinimas: 'pienas', kaina: 3.55, kiekis: 342},
         {id:4, pavadinimas: 'obuoliai', kaina: 232.55, kiekis: 12},
         {id:5, pavadinimas: 'kriauses', kaina: 4.55, kiekis: 153},
    ]

   
   return (
     
       <div>
           <h1>{antraste}</h1>
           {
            prekes.length > 0
            ? prekes.map((preke, index) => {
                return (
                    <div key={preke.id}>
                        <h4>{preke.pavadinimas}</h4>
                        <p>Kaina: {preke.kaina}, Kiekis: {preke.kiekis}</p>
                    </div>
                )
            })
            : <p>priekiu nera</p>
           }
       </div>
   )
};

export default Komp8;
