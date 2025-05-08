const Komp3 = () => {
    let studentas = {
        vardas: 'Ignas',
        amzius: 33,
        miestas: 'Vilnius',
        adresas: {
            gatve: 'Pupines',
            numeris: 1
        },
        bedarbis: false,
        pazymiai: [10, 5, 9, 4, 2, 9, 10]
    };

    const ArBedarbis = (bedarbis) => {
        // 1 budas
        // if (bedarbis) {
        //    return 'Taip'
        // }
        // return 'Ne';

        // 2 budas
        return bedarbis ? 'Taip' : 'Ne';
    }

    return (
        <>
            <h2>Studento informacija:</h2>
            <p>
                Studento Vardas: <strong>{studentas.vardas}</strong>, 
                Amzius: {studentas.amzius}
            </p>

            <p>Ar turi darba? { ArBedarbis(studentas.bedarbis) }</p>
            <p>
                Miestas: <strong>{studentas.miestas}</strong>,
                Gatve: <strong>{studentas.adresas.numeris}</strong>,
            </p>
            <p>Pazymiai: {studentas.pazymiai.join(', ')}</p>
        </>
    );
};

export default Komp3;
