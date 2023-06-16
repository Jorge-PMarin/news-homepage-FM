import Logo from '../../assets/images/logo.svg';
import BurgerIcon from '../../assets/images/icon-menu.svg';
import BurgerCloseIcon from '../../assets/images/icon-menu-close.svg';
import { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#" className="navbar-logo">
        <img src={Logo} alt="W logo" />
      </a>

      <button
        className="navbar-btn"
        aria-label="Toggle Menu"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <img src={BurgerIcon} alt="Menu icon" className={`navbar-burger ${menuIsOpen && "active"}`} />

        <img
          src={BurgerCloseIcon}
          alt="Close menu icon"
          className={`navbar-close ${menuIsOpen && "active"}`}
        />
      </button>

      <nav
        className={
          menuIsOpen ? 'navbar-navigation active' : 'navbar-navigation'
        }
      >
        <ul className={menuIsOpen ? 'navbar-list active' : 'navbar-list'}>
          <li className="navbar-item">
            <a href="#">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#">New</a>
          </li>
          <li className="navbar-item">
            <a href="#">Popular</a>
          </li>
          <li className="navbar-item">
            <a href="#">Trending</a>
          </li>
          <li className="navbar-item">
            <a href="#">Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
