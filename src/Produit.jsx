import './Produit.scss';
import BtnAjoutPanier from './BtnAjoutPanier';

export default function Produit(props) {
    // let panier = props.panier;
    // let setPanier = props.setPanier;
    // deviennent :
    const [panier, setPanier] = props.etatPanier;

    let qte = 0;
    if(panier[props.pid]) {
        qte = panier[props.pid].qte;
    }
    console.log("Quantité du produit : ", props.pid, " : ", qte);

    return (
        <article className="Produit">
            <img src={"images-produits/" + props.pid + ".webp"} alt={props.nom} />
            <div className="titre">{props.nom}</div> 
            <div className="prix">{props.prix}</div>
            <BtnAjoutPanier qte={qte} onClick={() => {
                // En opérateur ternaire :
                panier[props.pid] ? panier[props.pid].qte++ : panier[props.pid] = { prix: props.prix, qte: 1 };
                //Output dans la console pour débugging
                console.log("Panier : ", panier);

                // Notifier React que le panier a changé :
                setPanier({...panier});
            }} />
        </article>
    );
}