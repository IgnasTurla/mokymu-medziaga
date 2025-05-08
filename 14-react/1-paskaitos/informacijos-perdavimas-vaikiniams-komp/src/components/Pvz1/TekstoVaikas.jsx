const TekstoVaikas = (props) => {
 console.log(props.tekstas?.length)

 const patikrinimas = () => {
    if (props.tekstas && props.tekstas.split('').filter(raide => raide === 'a').length > 0) {
        return 'tekste yra "a" raide'
    } else {
        return 'tekste nera "a" raidziu'
    }
 }
    return (
        <div>
            <p>Gautas tekstas: 
                {/* {   
                    props.tekstas ?
                   <strong>
                    ilgis: {props.tekstas.length} -
                    reiksme: {props.tekstas}
               </strong>
                : ''
                } */}

                {
                    props.tekstas
                }
                <div>
                {
                    props.tekstas?.length
                }
                </div>
                 
               <div>
               {
                    patikrinimas()
                }
               </div>
                
               
            </p>
        </div>
    )
}

export default TekstoVaikas;