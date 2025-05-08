import Modulis from "./Modulis";

const Mokymai = () => {
    const moduliai = [
      { pavadinimas: "HTML", trukme: 10 },
      { pavadinimas: "CSS", trukme: 15 },
      { pavadinimas: "JavaScript", trukme: 20 },
      { pavadinimas: "React", trukme: 25 },
    ];
  
    return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Mokymų moduliai</h2>
        <div className="space-y-3">
          {moduliai.map((modulis, index) => (
            <Modulis key={index} pavadinimas={modulis.pavadinimas} trukme={modulis.trukme} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Mokymai;
