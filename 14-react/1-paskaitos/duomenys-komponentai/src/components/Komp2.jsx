
const Komp2 = () => {
  let pazymiai = [10, 9, 4, 7, 3, 10]
   
  const pazymiuVidurkis = (masyvas) => {
    let suma = 0;
    masyvas.forEach(element => suma += element);

    return suma / masyvas.length;
  }

   return (
     
       <div>
          <h2>Komp2</h2>
        <p>
            {pazymiai.join('-')}
        </p>
        <p>{pazymiai[2]}</p>
        <p>pazymius skaicius yra: {pazymiai.length}</p>
        <p>Mano vidurkis yra: {pazymiuVidurkis(pazymiai).toFixed(2)}</p>
       </div>
   )
};

export default Komp2;
