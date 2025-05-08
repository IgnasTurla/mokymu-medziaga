import Delione from "./Delione";

const HobiuParduotuve = () => {
    let delione1 = {
        pavadinimas: 'Puzle',
        kiekis: 1000,
        plotis: 50,
        aukstis: 100
    };
    let delione2 = {
        pavadinimas: 'Konstruktorius',
        kiekis: 2000,
        plotis: 20,
        aukstis: 1100
    };
    let delione3 = {
        pavadinimas: 'Lego',
        kiekis: 5000,
        plotis: 150,
        aukstis: 200
    }

  
    return (
        <div>
           <h1>HobiuParduotuve</h1>
            <Delione deliones={delione1}/>
            <Delione deliones={delione2}/>
            <Delione deliones={delione3}/>
        </div>
    )
};

export default HobiuParduotuve;