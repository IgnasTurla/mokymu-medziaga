const PrekiuKrepselis = () => {
    const krepselis = [
        {id: 1, pavadinimas: 'Piestukas', kaina: 1.25, kiekis: 212, nuolaida: 20},
        {id: 2, pavadinimas: 'Tusinukas', kaina: 2.25, kiekis: 112, nuolaida: 7},
        {id: 3, pavadinimas: 'Sasiuvinys', kaina: 3.25, kiekis: 18, nuolaida: 5},
        {id: 4, pavadinimas: 'Kuprine', kaina: 19.25, kiekis: 2, nuolaida: 25},
    ];

    const bendraNuolaida = () => {
        return krepselis.reduce((sum, preke) => sum + preke.nuolaida, 0);
    };

    const bendraKrepselioSuma = () => {
        let suma = 0;

        for (const preke of krepselis) {
            const prekiuKainaBeNuolaidos = preke.kaina * preke.kiekis;
            const nuolaidosSuma = prekiuKainaBeNuolaidos * (preke.nuolaida / 100);
            suma += prekiuKainaBeNuolaidos - nuolaidosSuma;
        }
        return suma.toFixed(2);
    };

    const atrinktiPagalKaina = (riba) => {
        return krepselis.filter(preke => preke.kaina > riba );
    };

    const prekiuLentele = (items) => {
        return (
            <table border="1">
                 <thead>
                     <tr>
                        <th>ID</th>
                        <th>Pavadinimas</th>
                        <th>Kaina Eu</th>
                        <th>Kiekis</th>
                        <th>Nuolaida %</th>
                     </tr>
                 </thead>
                 <tbody>
                       
                        {items.map(item => (
                         <tr key={item.id}>
                            <td>{item.id}</td> 
                            <td>{item.pavadinimas}</td>
                            <td>{item.kaina}</td>
                            <td>{item.kiekis}</td>
                            <td>{item.nuolaida}</td>
                       </tr>
                        ))}
                        </tbody>
            </table>
        );
    };


      return (
        <div>
            <h1>Prekiu krepselis</h1>
            <div>{prekiuLentele(krepselis)}</div>
            <div>Bendra Nuolaida: {bendraNuolaida()} Eu</div>
            <div>Bendra krepselio suma su nuolaida: {bendraKrepselioSuma()} Eu</div>
            <div>{prekiuLentele(atrinktiPagalKaina(3))}</div>
        </div>
      )
};

export default PrekiuKrepselis;