import './ListeProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produits.json';

export default function ListeProduits() {
  

  // metode 1 (programation imperative, avec boucle for)
  //let composantsProduits = [];
  //for (let i = 0; i < lesProduits.length; i++) {
  //composantsProduits.push(<Produit nom={lesProduits[i].nom} prix={lesProduits[i].prix} pid={lesProduits[i].id}/>)
  //}
    return (
        <section className="ListeProduits">
          <h2>Nos produits</h2>
          <div className="produits">
            {
              lesProduits.map(produit => <Produit key={produit.id} nom={produit.nom} prix={produit.prix} pid={produit.id}/>)
            }
          </div>
      </section>
    );
}