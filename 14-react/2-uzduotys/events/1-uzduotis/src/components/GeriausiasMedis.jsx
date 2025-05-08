const GeriausiasMedis = () => {
    

    const koksMedis = (medis) => {
         if (medis === 'berzas') {
            console.log('baltas')
         } else if (medis === 'azuolas') {
            console.log('ilgaamzis')
         } else {
            console.log('spygliuota')
         }
    }

    return(
        <div>
            <h2>Geriausias Medis</h2>
            <button onClick={ () => koksMedis('berzas')}>Berzas</button>
            <button onClick={ () => koksMedis('azuolas')}>Azuolas</button>
            <button onClick={ () => koksMedis('egle')}>Egle</button>
        </div>
    )
};

export default GeriausiasMedis;