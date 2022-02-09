import './PiedPage.scss';

export default function PiedPage() {
    return (
        <footer>
            &copy;{new Date().getFullYear()} - TIM Maisonneuve - Tous droits réservés
        </footer>
    );
}