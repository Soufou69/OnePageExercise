import {navbar, link, list, navbarContainer, siteName} from '../../styles/style.css';

export default function Navbar(){
    return(
        <nav className={navbar}>
            <div className={navbarContainer}>
                <div>
                    <h3 className={siteName}>SiteName</h3>
                </div>
                <ul className={list}>
                    <li><a className={link} href="#1">Hero1</a></li>
                    <li><a className={link} href="#2">Hero2</a></li>
                    <li><a className={link} href="#3">Hero3</a></li>
                    <li><a className={link} href="#4">Hero4</a></li>
                </ul>
            </div>
        </nav>
    );
}