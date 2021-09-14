import { object } from 'prop-types'
import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

export default function Burger(props) {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                return <BurgerIngredients key1 = {key +i} type= {key} />
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type= 'bread-top' />
            {transformedIngredients}
            <BurgerIngredients type= 'bread-bottom' />
        </div>
    )
}
