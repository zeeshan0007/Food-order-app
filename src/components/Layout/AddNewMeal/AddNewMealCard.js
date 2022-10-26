import React from "react";
import {useRef} from "react";

import Modal from "../../UI/Modal";
import Input from "../../UI/Input";

import classes from './AddNewMealCard.module.css'

const AddNewMealCard=props=>{

    const nameRef=useRef();
    const priceRef=useRef();
    const desRef=useRef();


    const submitHandler=(e)=>{
        e.preventDefault()

        const mealData={
            id:Math.random().toString(),
            name:nameRef.current.value,
            Description:desRef.current.value,
            price:+priceRef.current.value,
        };
        props.onAddNewMeal(mealData)
        props.onClose();
    }

    return <Modal onClose={props.onClose}>
        <h2>
            Add New Meal
        </h2>
        <form className={classes.form} onSubmit={submitHandler}>
            <div>
                <Input ref={nameRef} label="Name" input={{type:'string'}}/>
                <Input ref={priceRef} label="Price" input={{type:'number',min:'1',step:'1',defaultValue:'1'}}/>
                <Input ref={desRef} label="Description" input={{type:'string',multiline:'multiline',rows:"30"}}/>
            </div>

            <button onClick={props.onClose}>
              Cancel
            </button>
            <button>
                Add Meal
            </button>
        </form>
    </Modal>
}
export default AddNewMealCard;