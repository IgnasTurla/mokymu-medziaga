// Su props
// const Preke = (props) => {
//     console.log(props)
//     return (
//         <div>
//            <h3>{props.pavadinimas}</h3>
//            <p>Prekyboje turime: <strong>{props.kieks}</strong></p>
//            <p>Kaina: {props.kaina}</p>
//         </div>
//     )
// }

// export default Preke;

const Preke = ({ pavadinimas, kiekis, kaina }) => {

    return (
        <div>
            <h3>{pavadinimas}</h3>
            <p>Prekyboje turime: <strong>{kiekis}</strong></p>
            <p>Kaina: {kaina}</p>
        </div>
    );
};

export default Preke;
