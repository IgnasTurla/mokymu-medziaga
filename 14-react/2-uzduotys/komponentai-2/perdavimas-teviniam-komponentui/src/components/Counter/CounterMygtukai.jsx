const CounterMygtukai = (props) => {
    const onClickEvent = (value) => {
        props.addValue(value)
    }

    return(
        <div>
           {/* <button onClick={() => onClickEvent(1)}>+1</button>
           <button onClick={() => onClickEvent(2)}>+2</button>
           <button onClick={() => onClickEvent(5)}>+5</button> */}
            {props.buttons.map((button, index) => (
                <button key={index} onClick={() => onClickEvent(button.value)}>
                    {button.text}
                </button>
            ))}
        </div>
    )
};

export default CounterMygtukai;