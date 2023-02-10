import {heroContentContainer, containerFlexListCenter50, btn, spanArnaque, image, imageWrapper} from '../../styles/style.css';
import img from '../../assets/image1.svg'

export default function Content(){
    return(
        <div className={heroContentContainer}>
            <div className={containerFlexListCenter50}>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
                <h4>Sed dolor tellus, pretium quis suscipit pretium, dictum non massa. Quisque at pellentesque neque. Vivamus elementum pellentesque ullamcorper.</h4>
                <a href="#0" className={btn}>
                    <span className={spanArnaque}>Start</span>
                </a>
            </div>
            <div className={imageWrapper}>
                <img className={image} src={img} alt="img"/>
            </div>
        </div>
    );
};