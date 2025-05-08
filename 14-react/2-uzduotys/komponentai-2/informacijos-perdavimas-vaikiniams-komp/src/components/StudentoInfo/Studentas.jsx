import Pazimys from "./Pazimys";

const Studentas = () => {
    let vardas = 'Jonas';
    let pavarde = 'Jonaitis';
    let mokykla = 'Vilnius Coding School';
    let programa = 'JavaScript';

    let pazymiai = [2, 8, 7, 5, 10];

    return (
        <div>
            <h1>Studento informacija</h1>
            <p>Vardas: {vardas} - Pavardė: {pavarde}</p>
            <p>Mokykla: {mokykla}, Mokymo programa - {programa}</p>
            <h3>Pažymiai:</h3>
            {pazymiai.map((pazimys, i) => (
                <Pazimys key={i} value={pazimys} />
            ))}
        </div>
    );
};

export default Studentas;
