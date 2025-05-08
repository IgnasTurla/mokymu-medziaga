const Automobilis = ({automobilis}) => {
    
    
 
  
    return (
        <div>
           <h1>Automobilis</h1>
          <p>{automobilis.marke} - {automobilis.modelis}</p>
          <p>metai: {automobilis.metai}</p>
          <p>rida: {automobilis.rida} km</p>
          <p>kaina: {automobilis.kaina} Eu</p>
          <p></p>
        </div>
    )
};

export default Automobilis;