const Dealerp = (props) => {
    return (
        <div>
            <h3>Kereskedés adatai:</h3>
            <p>Név: { props.dealerName } </p>
            <p>Kereskedő: { props.owner } </p>
        </div>
    );
};
export default Dealerp;
