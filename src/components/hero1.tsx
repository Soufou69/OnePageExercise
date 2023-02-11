import Navbar from './hero1/navbar'
import Content from './hero1/content'
import {hero1} from '../styles/style.css';

export default function Hero1(){
    return(
        <div className={hero1} id="hero1">
            <Navbar />
            <Content/>
        </div>
    );
}