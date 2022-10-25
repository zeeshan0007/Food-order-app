import Modal from "../UI/Modal";
import {useContext} from "react";

import classes from './Card.module.css';
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";


const Cart = props => {

    const CartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (id) => {
        CartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        CartCtx.addItem({...item,amount:1});
    }

    const totalAmount= CartCtx.totalAmount.toFixed(2);

    const cartItems = <ul className={classes['cart-items']}>{CartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
                  onRemove={cartItemRemoveHandler.bind(null, item.id)}
                  onAdd={cartItemAddHandler.bind(null, item)}/>))}</ul>

    const hasItem = CartCtx.items.length > 0;
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{ `$${ totalAmount }`}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart;