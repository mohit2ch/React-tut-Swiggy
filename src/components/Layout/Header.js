import React from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props){
    return (
        <React.Fragment>
    <div className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onOpen={()=>{props.onOpen()}}></HeaderCartButton>
    </div>
    <div className={classes['main-image']}>
        <img src="images/meals.jpg" alt="main-image"/>
    </div>
    </React.Fragment>);
}