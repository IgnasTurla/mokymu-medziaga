const KnyguSpausdinimas = (props) => {
    return (
        <div>
            <h3>Ivestos knygos:</h3>
            {props.knygos.length === 0 && (
                <p>Nera ivestu knygu</p>
            )}
            {
              <ul>
              {props.knygos.map((knyga, index) => (
                  <li key={index}>
                      Pavadinimas: {knyga.pavadinimas} Kaina: {knyga.kaina} € Metai: {knyga.metai}
                  </li>
              ))}
             </ul>
            }
               
            
        </div>
    );
};

export default KnyguSpausdinimas;
