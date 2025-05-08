import { useState } from "react";

const Komp4 = () => {
   let [skaicius, setSkaicius] = useState(0);
 
     const onClickButtonAction = (value) => {
         if (value === 0) {
             setSkaicius(0)
         } else {
             setSkaicius(skaicius + value)
         }
  
     }
 
     return(
         <div>
             <h2>Komp4</h2>
             <h4>Skaiciu keitinejimas</h4>
             <button onClick={() => onClickButtonAction(1)}>didinti vienu</button>
             <button onClick={() => onClickButtonAction(-1)}>mazinti vienu</button>
             <button onClick={() => onClickButtonAction(5)}>didinti penkiais</button>
             <button onClick={() => onClickButtonAction(-5)}>mazinti penkiais</button>
             <button onClick={() => onClickButtonAction(0)}>nustatyti 0</button>
             <p>Dabartine reiksme: {skaicius}</p>
         </div>
     )
};

export default Komp4;