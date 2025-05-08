const EinaPrieLentos = () => {
    let studentuMasyvas = [
        'Viktorija',
        'Ignas',
        'Kestas',
        'Aurimas'
    ];

    const randomStudentas = () => {
        let atsitiktinisIndex = Math.floor(Math.random() * studentuMasyvas.length);
        let atsitiktinis= studentuMasyvas[atsitiktinisIndex];
        console.log(`Atsitiknis studentas yra: ${atsitiktinis}`)
    }


    return (
        <div>
            <h2>Eina prie lentos</h2>
            <button onClick={randomStudentas}>Atsitiktinis studentas</button>
        </div>
    )
};

export default EinaPrieLentos;