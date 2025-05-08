const Tikrinimai = () => {
    let skaicius = 12;

    const tikrintiSk = () => {
        if (skaicius % 2 === 0) {
            console.log('Skaicius '+skaicius+ ' Lyginis')
        } else {
            console.log('Skaicius '+skaicius+ ' nelyginis')
        }
    }

    const tikrintiSk2 = () => {
        if (skaicius > 30) {
            console.log('Skaicius '+ skaicius+ ' didesnis uz 30')
        } else {
            console.log('Skaicius '+ skaicius+ ' mazesnis uz 30')
        }
    }
    
    const arPirminis = () => {
        let pirminis = true;
        if (skaicius < 2) {
            pirminis = false;
        };

        for (let i = 2; i < skaicius; i++) {
            if (skaicius % i === 0) {
                pirminis = false;
                break;
            }}

        if (pirminis) {
            console.log(`Skaicius ${skaicius} yra pirminis`)
        } else {
            console.log(`Skaicius ${skaicius} ne pirminis`)
        }

    };
    



    return (
        <div>
            <h2>Tikrinimas</h2>
            <button onClick={tikrintiSk}>Ar lyginis</button>
            <button onClick={tikrintiSk2}>Ar daugiau 30</button>
            <button onClick={arPirminis}>Ar pirminis</button>
        </div>
    )
}

export default Tikrinimai;