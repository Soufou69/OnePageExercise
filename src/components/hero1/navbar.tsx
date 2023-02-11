import {navbar, navbarFixed, link, list, navbarContainer, siteName} from '../../styles/style.css';
import { Link } from 'react-scroll';

export default function Navbar(){


    return(
        <nav className={navbar}>
            <div className={navbarContainer}>
                <div>
                    <h3 className={siteName}>SiteName</h3>
                </div>
                <ul className={list}>
                    <li><Link activeClass='active' to="hero1" spy={true} smooth={true} offset={0} duration={0}><a className={link} href="#2">Landing</a></Link></li>
                    <li><Link activeClass='active' to="hero2" spy={true} smooth={true} offset={0} duration={0}><a className={link} href="#2">Hero1</a></Link></li>
                    <li><Link activeClass='active' to="hero3" spy={true} smooth={true} offset={0} duration={0}><a className={link} href="#2">Hero2</a></Link></li>
                    <li><Link activeClass='active' to="bb" spy={true} smooth={true} offset={0} duration={0}><a className={link} href="#2">BrandBar</a></Link></li>
                </ul>
            </div>
        </nav>
    );
}