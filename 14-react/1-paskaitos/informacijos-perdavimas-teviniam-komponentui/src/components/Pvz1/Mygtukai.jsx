const Mygtukai = (props) => {
    const onClickButtonHandler = () => {
        console.log('onclick button event:' + props.buttonText)
        props.tevoKomponentoFunkcija('onclick button event:' + props.buttonText)
    }

    return(
        <>
           <h3>Mygtukai</h3>
           <button onClick={onClickButtonHandler}>{props.buttonText}</button>
        </>
    )
};

export default Mygtukai;