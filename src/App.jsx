import './App.css';
import Entete from './Entete';
import PiedPage from './PiedPage';

function App() {
  return (
    <div className="App">
      <Entete />
      <section className="produits">
        <h2>Nos produits</h2>
        <ul>
          <li>Produit 1</li>
          <li>Produit 2</li>
          <li>Produit 3</li>
          <li>Produit 4</li>
          <li>Produit 5</li>
        </ul>
      </section>
      <PiedPage />
    </div>
  );
}

export default App;
