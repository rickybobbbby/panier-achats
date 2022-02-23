import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import {useState} from 'react';

function App() {
  // État React pour gérer un panier d'achats
  const etatPanier = useState({});
  // Remarquez que useState retourne un tableau : 
  // Le premier élément du tableau représente le contenu de l'état
  const panier = etatPanier[0]; 
  // Le deuxième élément est une fonction qui sert à réécrire l'état
  // const setPanier = etatPanier[1]; 
  // Donc, alternativement avec destructuration de tableau
  // const [panier, setPanier] = useState({});

  // État React pour gérer un compteur de clics
  // Remarquez la syntaxe JS de "déstructuration" de tableau : on obtient 
  // rapidement deux variables contenant les deux éléments du tableau retourné 
  // par useState()
  const [compteur, setCompteur] = useState(0); 

  return (
    <div className="App">
      <Entete panier={panier} />
      <ListeProduits etatPanier={etatPanier} />
      <div>
        <span>Nombre de clics : {compteur} </span>
        <button onClick={() => {setCompteur(compteur+1); console.log('Compteur des clics : ', compteur);}}>Cliquez-moi</button>
      </div>
      <PiedPage />
    </div>
  );
}

export default App;
