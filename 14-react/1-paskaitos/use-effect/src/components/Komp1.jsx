import { useEffect, useState } from "react"

const Komp1 = () => {
    const [count, setCount] = useState(0);
    const [zodis, setZodis] = useState('zodis');

    useEffect(() => {
        console.log('useEffect: komp1 mounted')
    }, []);

    useEffect(() => {
        console.log('useEffect: komp1 mounted OR Updated')
    });

    useEffect(() => {
        console.log('useEffect: count value is changed')
    }, [count]);

    useEffect(() => {
        console.log('useEffect: count and zodis')
    }, [count, zodis]);

    const handleClick = () => {
        console.log('click')
        setCount(count + 1)
    };

    return(
        <div>
             <h2>Komp1</h2>
             <button onClick={handleClick}>Click me</button>
             <p>{count}</p>
             <p>{zodis}</p>
        </div>
    )
}

export default Komp1;