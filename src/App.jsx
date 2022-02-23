import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import {useState} from 'react';

function App() {
  const etatPanier = useState({});

  const panier = etatPanier[0];
  //const setPanier = etatPanier[1];

  console.log("L'état panier : ", panier);

  // let panier = {
  //     prd0003: {
  //       prix: 13.95,
  //       qte: 5
  //     },
  //     prd0001: {
  //       prix: 9.95,
  //       qte: 2
  //     },
  //     prd0004: {
  //       prix: 11.95,
  //       qte: 18
  //     }
  // };

    // const compteurClic = useState(0);
    const [compteur, setCompteur] = useState(0);

  return (
    <div className="App">
      <Entete panier={panier} />
      <ListeProduits etatPanier={etatPanier} />
        <div>
            <span>Nombre de clics : {compteur}</span>
            <button onClick={() =>{setCompteur(compteur + 1); console.log('Compteur des clics : '+compteur)}}>Cliquez-moi</button>
        </div>
      <PiedPage />
    </div>
  );
}

export default App;
