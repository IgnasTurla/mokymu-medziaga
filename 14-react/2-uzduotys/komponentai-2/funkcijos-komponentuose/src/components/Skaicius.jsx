const Skaicius = () => {
    let skaitmuo = 57;

    const arLyginis = (sk) => {
        return sk % 2 === 0 ? 'Taip' : 'Ne';
    };

    const arTeigiamas = (sk) => {
        if (sk > 0) {
            return 'Didesnis uz 0';
        } else if (sk < 0) {
            return 'Mazesnis uz 0';
        } else {
            return 'Lygus 0';
        }
    };

    return (
        <div>
            <p>{skaitmuo}</p>
            <p>Ar {skaitmuo} yra lyginis? {arLyginis(skaitmuo)}</p>
            <p>{skaitmuo} yra {arTeigiamas(skaitmuo)}</p>
        </div>
    );
};

export default Skaicius;
