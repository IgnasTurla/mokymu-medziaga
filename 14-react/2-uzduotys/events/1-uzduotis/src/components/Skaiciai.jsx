const Skaiciai = () => {
    let skaiciai = [2, 9, 10, 12, 33];

    const skaiciuSuma = () => {
        let suma = 0;
        for (let sk of skaiciai) {
            suma += sk;
        }
        console.log(`Suma yra ${suma}`)
    };

    const didziausiasSK = () => {
        console.log(`Didziausias skaicius yra:`+ Math.max(...skaiciai));
    } 
    

    return (
        <div>
            <h2>Skaiciai</h2>
            <button onClick={skaiciuSuma}>Skaiciu suma</button>
            <button onClick={ () => didziausiasSK()}>Didziausias skaicius</button>
        </div>
    )
};

export default Skaiciai;