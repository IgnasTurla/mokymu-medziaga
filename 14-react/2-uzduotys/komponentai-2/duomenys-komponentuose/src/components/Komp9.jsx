// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {
      let kursai = [
        {id: 1, pavadinimas: 'Programavimas', trukme: '32 savaites', kaina: 2345},
        {id: 2, pavadinimas: 'Medicina', trukme: '332 savaites', kaina: 22345},
        {id: 3, pavadinimas: 'Policijis Akademija', trukme: '52 savaites', kaina: 4345}
      ]




    return (
        <div>
            {kursai.map((kursas) => (
                <div key={kursas.id}>
                   
                    <h2>Kursas: {kursas.pavadinimas}</h2>
                    <h3>Kurso trukme: {kursas.trukme}</h3>
                    <h4>Kaina: {kursas.kaina} Eu</h4>
                </div>
            ))}

            
        </div>
    )
}

export default Komp9
