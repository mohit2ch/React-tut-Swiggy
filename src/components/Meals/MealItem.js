import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../store/Auth';
export default function MealItem(props){

    const ctx = useContext(CartContext);
    function addHandler(amount){
        ctx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        })
    }
    const price = `$${props.price.toFixed(2)}`;
    return ( 
    <li className={classes.meal}>
        <div className={classes.row}>
        <h3>{props.name}</h3>
        <span className={classes.description}>{props.description}</span>
        <span className={classes.price}>{price}</span>
        </div>
        <MealItemForm onAdd={addHandler} id={`inputFor${props.id}`}/>
    </li>
    );
}