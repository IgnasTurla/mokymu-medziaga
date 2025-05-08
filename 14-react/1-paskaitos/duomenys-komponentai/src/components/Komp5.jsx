
const Komp5 = () => {
     let automobiliai = [
        'Audi',
        'Bmw',
        'Volvo',
        'Mercedes',
        'Toyota',
        'Mazda'
     ];
     let title = 'Mano automobiliai:';
   
    return (
      
        <div>
            <h1>{title}</h1>
            <ul>
            { automobiliai.map((automobilis, index) => <li key={index}>{automobilis}</li>) }
            </ul>
        </div>
    )
 };
 
 export default Komp5;