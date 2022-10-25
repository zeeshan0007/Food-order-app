import {useReducer} from "react";

import CartContext from "./cart-context";


const defaultState={
    items:[],
    totalAmount: 0,
}
const cartReducer =(state,action)=>{

    if(action.type === 'ADD'){

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        let  updatedItems=[...state.items];
        let existingCartItemIndex=state.items.findIndex((item)=>{
            return item.id === action.item.id;
        })
        let existingCartItem=state.items[existingCartItemIndex];

        if(existingCartItem){
           const updatedItem={
               ...existingCartItem,
               amount:existingCartItem.amount +action.item.amount
           };
            updatedItems[existingCartItemIndex]=updatedItem;
        }else{
            updatedItems=state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    if(action.type === 'REMOVE'){

        let existingCartItemIndex=state.items.findIndex((item)=>{
            return item.id === action.id;
        })

        let existingCartItem=state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;
        if(existingCartItem.amount === 1){
         updatedItems= state.items.filter((item)=> item.id !== action.id);
        }else{
          let updatedItem = {...existingCartItem, amount: existingCartItem.amount -1};
          updatedItems=[...state.items];
          updatedItems[existingCartItemIndex]=updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultState;
};



const CartProvider=props=>{

    const[cartState,dispatchCartActionFn]=useReducer(cartReducer,defaultState);
    const addItemToCartHandler=(item)=>{
        dispatchCartActionFn({type: 'ADD', item:item})
    };
    const removeItemFromCartHandler=(id)=>{
        dispatchCartActionFn({type: 'REMOVE', id:id})
    };

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,

        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
    };

    return<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;