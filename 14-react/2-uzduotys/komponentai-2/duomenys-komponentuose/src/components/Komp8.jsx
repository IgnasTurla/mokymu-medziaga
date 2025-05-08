// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {
     let salys = [
        {id: 1, pavadinimas: 'Lietuva', sostine: 'Vilnius', gyventojai: 3000000},
        {id: 1, pavadinimas: 'Lenkija', sostine: 'Varsuva', gyventojai: 500050052},
        {id: 1, pavadinimas: 'Latvija', sostine: 'Ryga', gyventojai: 60003400023}
     ];


    return (
        <div>
            {
            salys.map((salis) => (
              <div key={salis.id}>
                <h1>Salis: {salis.pavadinimas}</h1>
                <h3>Sostine: {salis.sostine}</h3>
                <h4>Gyventojai: {salis.gyventojai}</h4>
              </div>
              
            ))}
        </div>
       
    )
};

export default Komp8
