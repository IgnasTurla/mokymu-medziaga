import { useState } from 'react';
import useInput from '../hooks/useInput'

const Komp3 = () => {
    const nameInput = useInput('');
    const ageInput = useInput('');  
    const [name, setName] = useState();
    const [age, setAge] = useState();
    

    const handlerFormSubmit = (event) => {
        event.preventDefault();

        setName(nameInput.value);
        setAge(ageInput.value);
        
    }

    return(
        <>
        <h3>Form input pvz</h3>

        <form onSubmit={handlerFormSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" {...nameInput}/>
            </div>
            <div>
                <label htmlFor="age">Amzius</label>
                <input id="age" type="number" step='0.01' {...ageInput}/>
            </div>
            <br/>
            <button type="submit">Submit</button>
            <p>Mano vardas: {name}</p>
            <p>Mano amzius: {age}</p>
        </form>
        </>
         )
};

export default Komp3;