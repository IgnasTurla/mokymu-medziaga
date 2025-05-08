const Komp1 = () => {
    const tekstoHandler = (event) => {
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)
        let tekstas = event.target.value

        if (tekstas.length > 6) {
            console.log('tekstas didejaaaa')
        }
    }

    return (
        <div>
            <h2>Komp1</h2>
            <input type="text" onInput={tekstoHandler}/>
            {/* <input type="number"/>
            <input type="password"/> */}
        </div>
    )
};

export default Komp1;