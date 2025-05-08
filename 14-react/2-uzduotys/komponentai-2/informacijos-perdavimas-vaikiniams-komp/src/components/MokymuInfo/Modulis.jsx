const Modulis = ({ pavadinimas, trukme }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md bg-gray-100">
        <h3 className="text-xl font-bold">{pavadinimas}</h3>
        <p>Trukmė: {trukme} val.</p>
      </div>
    );
  };

  export default Modulis;