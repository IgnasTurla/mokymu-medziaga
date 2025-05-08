
const Delione = ({deliones}) => {

    const delionesSudetingumas = () => {
        if (deliones.kiekis > 1500 ) {
            return 'lalala'
        }
    }
     
  
    return (
        <div>
           <h1>Delione</h1>
           <h2>{deliones.pavadinimas}</h2>
           <p>daliu kiekis: {deliones.kiekis}</p>
           <p>deliones plotis: {deliones.plotis} cm, deliones aukstis: {deliones.aukstis} cm</p>
           <p>{delionesSudetingumas()}</p>
        </div>
    )
};

export default Delione;