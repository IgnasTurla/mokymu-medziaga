import Mygtukai from "./Mygtukai";

const Pasirinkimai = () => {

    const apdorotiVaikoReiksme = (atejusInfo) => {
        console.log('duomenys is vaiko komponento yra: ' + atejusInfo)
    }

    return(
        <div>
            <h2>Pasirinkimai</h2>

            <Mygtukai
                buttonText="click me"
                tevoKomponentoFunkcija={apdorotiVaikoReiksme}/>
            <Mygtukai
             buttonText="add me"
             />
            <Mygtukai
             buttonText="delete me"
             />
          
        </div>
    )
};

export default Pasirinkimai;