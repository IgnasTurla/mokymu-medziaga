import Darbuotojas from "./Darbuotojas";

const Imone = () => {
    let darbuotojai = [
        {vardas: 'Jonas', pavarde: 'Joniukas', bonusas: 0},
        {vardas: 'Petras', pavarde: 'Petraitis', bonusas: 1300},
        {vardas: 'Viktorija', pavarde: 'Baskeviciute', bonusas: 100},
    ]

  
    return (
        <div>
           <h1>Imone</h1>
           {
            darbuotojai.map((darbuotojas, i) => <Darbuotojas key={i}
            vardas={darbuotojas.vardas}
            pavarde={darbuotojas.pavarde}
            bonusas={darbuotojas.bonusas}
            />
        
        )
           }
        </div>
    )
};

export default Imone;