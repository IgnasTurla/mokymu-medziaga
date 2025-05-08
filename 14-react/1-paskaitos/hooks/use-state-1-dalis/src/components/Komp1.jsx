import { useState } from "react";

const Komp1 = () => {
     let [skaicius, setSkaicius] = useState(0);

     const didinti = () => {
        setSkaicius(skaicius + 1);
      };

      const mazinti = () => {
        setSkaicius(skaicius - 1);
      }

    return(
        <div>
            <h2>Komp1</h2>
            <h4>Counter</h4>
            <button onClick={didinti}>Didinti</button>
            <button onClick={mazinti}>Mazinti</button>
            <p>Dabar yra: {skaicius}</p>
        </div>
    )
};

export default Komp1;



// const Komp1 = () => {
//     return(
//         <div>
//             <h2>Komp1</h2>
//         </div>
//     )
// };

// export default Komp1;