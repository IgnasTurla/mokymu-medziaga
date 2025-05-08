import {averageArray} from '../utils/calculator'

const Komp2 = () => {
    let skaiciai = [
        101,
        2,
        45,
        10
    ]

    const didziausiasSk = (mas) => {
        //   ciklas bega per masyva iesko didziausio skaiciaus
           return Math.max(...mas)
    };

    const maziausiasSk = (mas) => {
        return Math.min(...mas)
    }

   
    
    return (
        <div>
           Komp2
           <p>{skaiciai.join(', ')}</p>
           <p>didziausias skaicius yra: {didziausiasSk(skaiciai)}</p>
           <p>maziausias skaicius yra: {maziausiasSk(skaiciai)}</p>
           <p>Vidurkis yra: {averageArray(skaiciai)}</p>
        </div>
    );
};

export default Komp2;




// const Komp2 = () => {
  
//     return (
//         <div>
           
//         </div>
//     );
// };

// export default Komp2;
