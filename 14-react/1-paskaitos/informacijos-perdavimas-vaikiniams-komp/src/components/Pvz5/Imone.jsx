import Darbuotojas from './Darbuotojas'

const Imone = () => {
    let darbuotojas = {
        vardas: 'Jonas',
        pavarde: 'Jonaitis',
        amzius: 35,
        pareigos: 'Programuotojas',
        atlyginimas: 1500
    };

    let darbuotojas2 = {
        vardas: 'Petras',
        pavarde: 'Petraitis',
        amzius: 44,
        pareigos: 'Dizaineris',
        atlyginimas: 2500
    }

    return (
        <div>
            <h1>Imone</h1>
            <Darbuotojas darbuotojas={darbuotojas}/>
            <Darbuotojas darbuotojas={darbuotojas2}/>
        </div>
        
    )
}

export default Imone;