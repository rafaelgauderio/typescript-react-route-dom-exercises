import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <>
            <header className="header-container">
                <div className="header-content-container container">
                    <Link to="/">
                        <h1 className="site-title">Site Home DeLuca</h1>
                    </Link>
                    <nav className="header-navbar">
                        <ul>
                            <li>Home</li>
                            <li>Promotion</li>
                            <li>Subscription</li>
                        </ul>
                    </nav>
                </div>

            </header>
        </>
    );
}

export default Header;