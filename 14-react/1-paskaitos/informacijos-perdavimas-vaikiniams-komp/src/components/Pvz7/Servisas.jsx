import Automobilis from "./Automobilis";

const Servisas = () => {
     let automobiliai = [
        {gamintojas: 'Audi', modelis: 'A7'},
        {gamintojas: 'Bmw', modelis: '750'},
        {gamintojas: 'Mercedes', modelis: 'e500'},
        {gamintojas: 'Audi', modelis: 'A3'},
        {gamintojas: 'Toyota', modelis: 'Avensis'},
     ]

    return (
        <div>
            <h1>Servisas:</h1>
            {/* <Automobilis auto={automobiliai[0]}/>
            <Automobilis auto={automobiliai[1]}/>
            <Automobilis auto={automobiliai[2]}/>
            <Automobilis auto={automobiliai[3]}/>
            <Automobilis auto={automobiliai[4]}/> */}

            {
                automobiliai.map((automobilis, i) => <Automobilis key={i} auto={automobilis}/>)
            }
        </div>
    )
}

export default Servisas;