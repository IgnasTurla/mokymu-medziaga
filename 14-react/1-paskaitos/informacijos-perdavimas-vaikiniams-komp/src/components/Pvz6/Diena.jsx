const Diena = (props) => {
    console.log(props);

    const arDetisKepure = (temperatura) => {
        if (temperatura > 18) {
            return 'Valioooooo, Kepures nereikia'
        } else {
            return 'lauke salta....... dekis kepure'
        }
    }
    

    return (
        <div>
            <h3>Dienos temperatura: {props.temp}</h3>
            <p>{arDetisKepure(props.temp)}</p>
        </div>
    )
}

export default Diena;