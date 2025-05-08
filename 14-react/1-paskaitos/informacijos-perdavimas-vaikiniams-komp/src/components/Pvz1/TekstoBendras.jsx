import TekstoVaikas from './TekstoVaikas'


const TekstoBendras =() => {
    let manoKintamasis = 'Tekstas is kintamojo';
    let tekstai = [
        'Tekstas is masyvo',
        'viso',
        'labas labas',  
        '',
        '',
        '',  
        'labas labas labas',   
        'labas labas labas labas'
    ]

    return (
        <div>
            TekstoDalykai
            <div>
                <TekstoVaikas tekstas="Dinaminis tekstas"/>
                <TekstoVaikas tekstas="labas"/>
                <TekstoVaikas tekstas="antras vaikas"/>
                <TekstoVaikas tekstas="dar vienas vaikas"/>
                <hr/>
                <TekstoVaikas tekstas={manoKintamasis}/>
                <hr/>
                <TekstoVaikas />

                {
                    tekstai.map((item, key) => <TekstoVaikas key={key} tekstas={item}/>)
                }
            </div>
        </div>
    )
};

export default TekstoBendras;