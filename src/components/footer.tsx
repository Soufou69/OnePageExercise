import {footer,hrFooter} from '../styles/global.css';


export default function Footer(){
    return(
        <footer className={footer}>
            <hr className={hrFooter} />
            <p>Made by Soufou with {"<3"}</p>
        </footer>
    );
}