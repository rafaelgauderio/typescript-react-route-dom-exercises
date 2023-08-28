import { Link } from 'react-router-dom';
import './styles.css';
import { NavLink } from 'react-router-dom';

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
                            <NavLink to="/home" className={({isActive}) => isActive ? "menu-item-active" : "header-navbar"}>
                                <li>Home</li>
                            </NavLink>
                            <NavLink to="promotion" className={({isActive}) => isActive ? "menu-item-active" : "header-navbar"}>
                                <li>Promotion</li>
                            </NavLink>
                            <NavLink to="/subscription" className={({isActive}) => isActive ? "menu-item-active" : "header-navbar"}>
                                <li>Subscription</li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>

            </header>
        </>
    );
}

export default Header;