import './BtnAjoutPanier.scss';
import Badge from '@mui/material/Badge';

export default function BtnAjoutPanier(props) {

    return (
        <Badge badgeContent={props.qte} color="primary">
            <button onClick={props.onClick} className="BtnAjoutPanier">Ajouter au panier</button>
        </Badge>   
    );
}