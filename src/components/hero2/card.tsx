import {card, titleCard,contentCard} from '../../styles/hero2.css'
import IconCard from './iconCard';

export default function Card(props:{id:number}){
    return(
        <div className={card}>
            <div style={{maxWidth:'350px'}}>
            <p className={titleCard}>Title {props.id}</p>
            <p className={contentCard}>Curabitur massa arcu, volutpat vel felis eget, porta eleifend erat. Integer enim libero, malesuada a tempus ac, pharetra vitae nulla.</p>
            </div>
            <IconCard />
        </div>
    );
};