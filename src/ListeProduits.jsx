import './ListeProduits.scss';
import Produit from './Produit';
//import lesProduits from './data/produits.json'; OLD
import { bdFirestore as bd } from './firebase/init';
import { useState, useEffect} from 'react';
import { collection, getDocs} from "firebase/firestore"



export default function ListeProduits(props) {

const[produits, setProduits] = useState([]);

useEffect(function() {
  //Obtenir tous les documents de la collection magasin-produit
getDocs(collection(bd, 'magasin produits')).then(
    qs => setProduits(qs.docs.map(doc => ({id: doc.id, ...doc.data()})))
);  
}, []);


    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {
                    produits.map(p => <Produit etatPanier={props.etatPanier} setPanier={props.setPanier} key={p.id} nom={p.nom} prix={p.prix} pid={p.id} />)
                }
            </div>
        </section>
    );
}