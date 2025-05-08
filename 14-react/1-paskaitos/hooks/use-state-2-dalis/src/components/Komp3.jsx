import { useState } from "react";

const Komp3 = () => {
    const [masyvas, setMasyvas] = useState([]);

    const onShowButtonClickHandler = () => {
        console.log(masyvas);
    }

    const onAddButtonClickHandler = () => {
    //    masyvas.push(
    //       Math.round(Math.random())
    //    );

       setMasyvas(
        [ ...masyvas, Math.round(Math.random())]
    )
    }

    return(
        <div>
            <h2>Komp3</h2>
            <div>{masyvas}</div>
            <button onClick={onShowButtonClickHandler}>show array</button>
            <div>
                <button onClick={onAddButtonClickHandler}>Add value into array</button>
            </div>
        </div>  
    )
};

export default Komp3;