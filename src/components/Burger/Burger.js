import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

export default function Burger() {
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type= 'bread-top' />
            <BurgerIngredients type= 'cheese' />
            <BurgerIngredients type= 'meat' />
            <BurgerIngredients type= 'bacon' />
            <BurgerIngredients type= 'bread-bottom' />
        </div>
    )
}
