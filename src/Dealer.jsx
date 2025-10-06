const Dealer = ({ dealerName, owner}) => {
    return (
        <div>
            <h3>Kereskedés adatai:</h3>
            <p>Név: { dealerName } </p>
            <p>Kereskedő: { owner } </p>
        </div>
    );
};
export default Dealer;
