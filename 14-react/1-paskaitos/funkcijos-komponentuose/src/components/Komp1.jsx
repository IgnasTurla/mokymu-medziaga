import {suma} from '../utils/calculator'

const Komp1 = () => {
    let skaicius = 57;
    let pirmas = 5, antras = 7;
    const patikrintiSkaiciu = (skaicius) => {
        return skaicius === 55 ? 'skaicius yra 55' : 'skaicius nera 55';
    };

    return (
        <div>
            <h2>Skaiciai ir skaiciavimai</h2>
            <p>{skaicius}</p>
            <p>{skaicius + 5}</p>
            <p>{skaicius - 5}</p>
            <p>{skaicius / 5}</p>
            <p>{patikrintiSkaiciu(skaicius)}</p>
            <p>{suma(pirmas, antras)}</p>
        </div>
    );
};

export default Komp1;
