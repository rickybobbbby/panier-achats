import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

export default function Entete(props) {
    console.log("Les props du composant Entête : ", props);
    console.log("Le panier dans Entête : ", Object.values(props.panier));
    //let totalQte = Object.values(props.panier).reduce((acc, article) => acc+article.qte, 0);
    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <input type="checkbox"  id="cc-sommaire-panier"/>
            <div className="sommaire-panier">
                <h3>sommaire du panier</h3>
            </div>
            <nav>
                <Badge badgeContent={Object.values(props.panier).reduce((acc, article) => acc+article.qte, 0)} color="secondary">
                    <label htmlFor="cc-sommaire-panier"><ShoppingCartSharpIcon/></label>
                </Badge>
                <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}