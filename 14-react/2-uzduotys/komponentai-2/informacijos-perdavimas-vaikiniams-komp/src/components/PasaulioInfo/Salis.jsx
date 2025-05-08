const Salis = (props) => {
     let {pavadinimas, zemynas} = props.salis;

     function arEuropa () {
         if (zemynas === 'Europa') {
            return 'Jega Europa';
         } else {
            return 'Ne Europa'
         }
            } ;

    // function arEuropa() {
    //     return zemynas === 'Europa' ? 'Jega Europa!' : 'Ne Europa';
    // }

    return (
        <div>
            <h2>Salys:</h2>
            <h4>{pavadinimas} - {zemynas}</h4>
            <p>{arEuropa()}</p>
        </div>
    )
};

export default Salis;