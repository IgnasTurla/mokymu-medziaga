const Pazimys = ({ value }) => {
    const arTeigiamas = (pazimys) => {
        return pazimys > 5 ? 'Teigiamas' : 'Neigiamas';
    };

    return (
        <div>
            <h2>Pažymys: {value}</h2>
            <p>{arTeigiamas(value)}</p>
        </div>
    );
};

export default Pazimys;
