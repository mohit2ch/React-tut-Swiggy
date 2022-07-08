import classes from './Input.module.css';

export default function Input(props){
    return <div className={classes.input}> 
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={props.Ref} {...props.input}></input>
    </div>
}