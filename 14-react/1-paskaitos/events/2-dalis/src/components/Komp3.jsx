const Komp3 = () => {
    let zodis = 'azuolas';

     const inputHandler = (event) => {
        let ivestasZodis = event.target.value;

        if (zodis === ivestasZodis) {
            console.log('bam atspejai!')
        } else {
            console.log('bandyk dar karta')
        }
     }

    return (
        <div>
            <h2>Komp3</h2>
            <input type="text" onChange={inputHandler}/>
           
        </div>
    )
};

export default Komp3;