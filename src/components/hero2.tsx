import {hero,container,hr,circle,num,margin0,textBlue} from '../styles/hero2.css'
import Cards from './hero2/cards';
import Fade from 'react-reveal/Fade';

export default function Hero2(){
    return(
        <div className={hero} id="hero2">
            <div className={container}>
                <Fade bottom>
                <div className={circle}><h2 className={num}>1</h2></div>
                <h2 className={margin0&&textBlue}>Lorem ipsum dolor</h2>
                <h1 className={margin0}>Donec sed mattis metus.</h1>
                <hr className={hr} />
                <h3>Sed sit amet metus a ipsum molestie ornare venenatis id magna. Vivamus bibendum, magna eu dictum cursus, sapien tortor mattis lorem, in congue est nibh sit amet felis.</h3>
                </Fade>
                <Cards />
                <div style={{position: 'absolute', top:'52%', left:'calc(50% - 7px)'}}>
                    <svg height="430" style={{filter: 'drop-shadow(0px 0px 13px #3963B5)'}}>
                        <rect x="0" y="0" width="13" height="410" fill="#2256bd45"></rect>
                    </svg> 
                </div>
            </div>
        </div>
    );
}