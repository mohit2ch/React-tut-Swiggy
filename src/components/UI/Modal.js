import classes from './Modal.module.css';
import React from 'react';
export default function Modal(props){
    return <React.Fragment>
        <div className={classes.backdrop}>

        </div>
        <div className={classes.modal}>
            {props.children}
        </div>
    </React.Fragment>
}