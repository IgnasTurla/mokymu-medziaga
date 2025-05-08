import { useState, useRef } from "react";

const Temperaturos = () => {
    const [temperaturos, setTemperaturos] = useState([]);
   
    const temperaturosRef = useRef();

    const onIvestiClick = (event) => {
        event.preventDefault();
        setTemperaturos([...temperaturos, temperaturosRef.current.valueAsNumber]);
 
        temperaturosRef.current.value = '';
     };

     const vidutineTemp = () => {
        const suma = temperaturos.reduce((sum, temp) => sum + temp, 0);
        return suma / temperaturos.length || 0;
     }

     const kiekIsVisoTemp = () => {
        if (temperaturos.length > 0) {
            return temperaturos.length
        } else {
           return 'Nera temperaturu informacijos'
        }
       };

       const tempSkirtumas = () => {
        if (temperaturos.length > 0) {
            const minTemp = Math.min (...temperaturos);
            const maxTemp = Math.max (...temperaturos);
            return maxTemp - minTemp;
        }
        return ';'
       };

       const valytiMasyva = () => {
         setTemperaturos([]);
       };

      const maziausiaTemp = () => temperaturos.length > 0 ? Math.min(...temperaturos) : '';
      const didziausiaTemp = () => temperaturos.length > 0 ? Math.max(...temperaturos) : '';

    return(
        <div>
            <h2>Temperaturos</h2>
            <form>
                <label htmlFor="inputTemp">Temperatura: </label>
                <input type="number" id="inputTemp" ref={temperaturosRef}/>
                <button  onClick={onIvestiClick}>Spausti</button>
                <p>Temperaturu skaicius: {kiekIsVisoTemp()}</p>

                {temperaturos.length > 0 && (
                    <>
                        <p>{temperaturos.join(', ')}</p>
                        <p>Vidutinė temperatura: {vidutineTemp().toFixed(2)}</p>
                        <p>Zemiausia ivesta temperatura: {maziausiaTemp()}</p>
                        <p>Didziausia ivesta temperatura: {didziausiaTemp()}</p>
                        <p>Temperaturu skirtumas: {tempSkirtumas()}</p>
                        <button onClick={valytiMasyva}>Isvalyti</button>
                    </>
                )}
                
            </form>
        </div>
    )
};

export default Temperaturos;