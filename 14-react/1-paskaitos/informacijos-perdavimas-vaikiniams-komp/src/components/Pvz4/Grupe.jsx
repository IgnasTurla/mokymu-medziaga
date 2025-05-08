import Studentas from './Studentas'

const Grupe = () => {
    let studentoMasyvas = {
        vardas: 'Jonas',
        pavarde: 'Jonaitis',
        amzius: 25,
        pazymiai: [1, 5, 8]
    }

    
    return (
         <div>
            <h2>Grupe</h2>
            <Studentas studentas={studentoMasyvas} />
         </div>
    )
}

export default Grupe;