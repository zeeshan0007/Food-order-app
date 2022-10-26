import {useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Card";
import CartProvider from "./store/CartProvider";
import AddNewMealCard from "./components/Layout/AddNewMeal/AddNewMealCard";


function App() {

    const [dummyMeals,setDummyMeals] = useState([
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
        },
        {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.5,
        },
        {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
        },
        {
            id: 'm4',
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            price: 18.99,
        },
    ]);

    const [cartIsShown,setCartIsShown]=useState(false);
    const [addMealIsShown,setAddMealIsShown]=useState(false);

    const showCartHandler=()=>{
        setCartIsShown(true)
    }
    const hideCartHandler=()=>{
        setCartIsShown(false)
    }
    const showAddMealHandler=()=>{
        setAddMealIsShown(true)
    }
    const hideAddMealHandler=()=>{
        setAddMealIsShown(false)
    }

    const addNewMealHandler = (meal) => {
        setDummyMeals((prevMeals)=>{
            return [meal, ...prevMeals]
        })
    };

  return (
    <CartProvider>
        {cartIsShown &&  <Cart onClose={hideCartHandler}/>}
        {addMealIsShown &&  <AddNewMealCard onClose={hideAddMealHandler} onAddNewMeal={addNewMealHandler}/>}
        <Header onShowCart={showCartHandler} onAddMealModal={showAddMealHandler}/>
        <main>
            <Meals dummyMeals={dummyMeals} setDummyMeal={setDummyMeals}/>
        </main>
    </CartProvider>
  );
}

export default App;
