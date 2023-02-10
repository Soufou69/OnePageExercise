import Card from "./card";
import {cards} from '../../styles/hero2.css'
export default function Cards(){
    return(
        <div className={cards}>
            <Card id={1}/>
            <Card id={2}/>
            <Card id={3}/>
            <Card id={4}/>
        </div>
    );
}