import './Entete.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

export default function Entete(props) {
    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <nav>
            <a href="#">
            <Badge badgeContent={Object.values(props.panier).length} color="secondary">
            <ShoppingCartIcon />
            </Badge>
            </a>
            <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}