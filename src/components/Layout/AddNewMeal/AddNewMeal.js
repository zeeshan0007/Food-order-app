import React from "react";

import classes from './AddNewMeal.module.css'

const AddNewMeal=props=>{


    return <button className={classes.button} onClick={props.onClick}>
        Add Meal
    </button>
};

export default AddNewMeal;