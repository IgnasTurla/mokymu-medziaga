const Darbuotojas = ({vardas, pavarde, bonusas}) => {
    // const bonusoDydis = () => {
    //     if (bonusas === 0) {
    //         return 'Negavo bonuso :(';
    //     } else if (bonusas > 100) {
    //         return 'Valiooooooo Didelis bonusas';
    //     } else if (bonusas > 0 && bonusas <= 100) {
    //         return 'Bent ant kebabo uzteks';
    //     }
    // };

    const bonusoDydis = () => {
        return bonusas === 0 ? 'Negavo bonuso :(' :
               bonusas > 100 ? 'Valiooooooo Didelis bonusas' :
               'Bent ant kebabo uzteks';
    };

  
    return (
        <div>
           <h2>Darbuotojai</h2>
           <h4>{vardas} - {pavarde}</h4>
           <p> Bonusas: <strong>{bonusas} Eu</strong></p>
           <p>{bonusoDydis()}</p>
        </div>
    )
};

export default Darbuotojas;