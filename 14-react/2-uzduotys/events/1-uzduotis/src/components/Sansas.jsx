const Sansas = () => {
    const atsitiktinisSk = Math.floor(Math.random() * 10) + 1;

    const patikrintiSk = () => {
         if ( atsitiktinisSk >= 5) {
            alert('Daugiau nei 5 laimejote!');
            console.log(atsitiktinisSk)
         } else {
            console.log(atsitiktinisSk);
            alert('Deja maziau uz 5 pralaimejote')
         } 
    }

    return (
        <div>
            <h2>Sansas</h2>
            <button onClick={ patikrintiSk }>Patikrinti</button>
        </div>
    )
};

export default Sansas;