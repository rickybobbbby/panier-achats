import './Entete.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

export default function Entete() {
    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <nav>
            <a href="#">
            <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
            </Badge>
            </a>
            <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}