const Komp6 = () => {
    const skalptasSkHandler = () => {
        let slaptasSk = Math.floor(Math.random() * 10 + 1);
        console.log(slaptasSk)
    }
  
 

    return (
          <div>
               <h4>Komp6</h4>
                <button onClick={ skalptasSkHandler }>
                    Spaptas skaicius
                </button>
          </div>
    )
};

export default Komp6;