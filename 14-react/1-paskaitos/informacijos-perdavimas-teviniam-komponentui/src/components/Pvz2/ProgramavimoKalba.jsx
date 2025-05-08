const ProgramavimoKalba = (props) => {
    const onClickEvent = (language) => {
        console.log(language);
        props.kalbosPasirinkimas(language); 
    }

    return(
    <div>
        <button onClick={ () => onClickEvent('JavaScript')}>JavaScript</button>
        <button onClick={ () => onClickEvent('PHP')}>PHP</button>
        <button onClick={ () => onClickEvent('C#')}>C#</button>
        <button onClick={ () => onClickEvent('Nepasirinkta')}>Nepasirinkta</button>
    </div>
    )
};

export default ProgramavimoKalba;