import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="navbar">
            <div>
            <img src="/onlyElephant.png" className="elephant" alt="elephant"></img>
            </div>
            <ul className="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            <div className="nav-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={32} className="GiHamburgerMenu" onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="nav-smallscreen-overlay">
                        <MdOutlineRestaurantMenu fontSize={28} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="navbar-smallscreen-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}


export default Navbar;