import {band,rectangle} from '../styles/brandBand.css'
import Rect from './brandBand/rect';

export default function BrandBand(){
    return(
        <div className={band}>
            <div className={rectangle} style={{background: '#100E14',}}>
            <p>Brands</p>
        </div>
            <div className={rectangle} style={{background: '#E06254',}}>
            <p>Brand Name</p>
            <p>Brand Description</p>
        </div>
            <div className={rectangle} style={{background: '#3A82BF',}}>
            <p>Brand Name</p>
            <p>Brand Description</p>
        </div>
            <div className={rectangle} style={{background: '#585858',}}>
            <p>Brand Name</p>
            <p>Brand Description</p>
        </div>
            <div className={rectangle} style={{background: '#585858',}}>
            <p>Brand Name</p>
            <p>Brand Description</p>
        </div>
            <div className={rectangle} style={{background: '#409343~',}}>
            <p>Brand Name</p>
            <p>Brand Description</p>
        </div>
            <div className={rectangle} style={{background: '#E06254',}}>
            <p>Brand Name</p>
            <p>Brand Description</p>
        </div>
            <div className={rectangle} style={{background: '#100E14',}}>
            <p>Brand Name</p>
            <p>Brand Description</p>
        </div>
        </div>
    );
}