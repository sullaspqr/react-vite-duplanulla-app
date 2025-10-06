import './App.css'
import Car from './Car';
import Carp from './Carp';
import Dealer from './Dealer';
import Dealerp from './Dealerp';
const App = () => {
  return (
    <div>
      <Car szin="fehér" tipus="450h" marka="Lexus" />
      <Car szin="fekete" tipus="A6" marka="Audi" />
      <Car szin="piros" tipus="MX-5" marka="Mazda" />
      <Carp szin="fehér" tipus="350h" marka="Lexus" />
      <Carp szin="fekete" tipus="A8" marka="Audi" />
      <Carp szin="piros" tipus="RX-6" marka="Mazda" />
      <Dealer dealerName="Toyota" owner= "Toyota Márton"/>
      <Dealer dealerName="Ford" owner= "Ford Péter"/>
      <Dealerp dealerName="Lexus" owner= "Lexus Andrea"/>
      <Dealerp dealerName="Mazda" owner= "Mazda Krisztina"/>
    </div>
  );
}
export default App;
