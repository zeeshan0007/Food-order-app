import React from 'react';

import {useContext} from "react";

import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = props => {
    let price=`$${props.price.toFixed(2)}`;

    const CartCtx=useContext(CartContext)
    const addToCardHandler=(amount)=>{
        CartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price,

        })
    }
    return <li  className={classes.meal}>
        <div>
            <h3>
                {props.name}
            </h3>
            <div className={classes.description}>
                {props.description}
            </div>
            <div className={classes.price}>
                {price}
            </div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCardHandler}/>
        </div>

    </li>
};
export default MealItem;