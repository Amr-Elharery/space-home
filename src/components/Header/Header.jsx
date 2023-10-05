import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

import './Header.css';

function Header() {
  return (
    <header>
        <div className="container">
            <Logo />

            <Nav />
        </div>
    </header>
  )
}

export default Header;