import React, {useEffect, useState} from "react";
import {useContext} from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";




const HeaderCartButton = props =>{

    const[bumpButton,setBumpButton]=useState(false);
    const cartCtx=useContext(CartContext);

    const {items} =cartCtx;


    const NumberOfCartItems=items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0)

    const bumpClasses =`${classes.button} ${ bumpButton ? classes.bump: "" }`;

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBumpButton(true);

        const timer=setTimeout(()=>{
            setBumpButton(false)
        },300)

        return(()=>{
            clearTimeout(timer)
        })
    },[items])

    return <button className={bumpClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Card
        </span>
        <span className={classes.badge}>
            {NumberOfCartItems}
        </span>
    </button>
}
export default HeaderCartButton;