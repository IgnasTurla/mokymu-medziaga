import Automobilis from './Automobilis'

const Pardavejas = () => {
    let automobilis = {
        marke: 'Bmw',
        modelis: '730d',
        metai: 2006,
        rida: 333000,
        kaina: 5500
    }

  
    return (
        <div>
           <h1>aaa</h1>
          <Automobilis automobilis={automobilis}/>
        </div>
    )
};

export default Pardavejas;