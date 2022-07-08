import Input from '../UI/Input';
import classes from './MealItemForm.module.css';
import { useRef } from 'react';
export default function MealItemForm(props){
    function submitHandler(event){
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = parseInt(enteredAmount);
        if(enteredAmountNumber !== NaN){
            props.onAdd(enteredAmountNumber);
        }
        
    }
    const amountInputRef = useRef(); 
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input  Ref= {amountInputRef} label="amount" input={{
           
            id: props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>Add</button>
    </form>
}