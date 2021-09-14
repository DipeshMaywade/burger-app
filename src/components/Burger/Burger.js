import { object } from 'prop-types'
import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

export default function Burger(props) {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                return <BurgerIngredients key1 = {key +i} type= {key} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    
    if(transformedIngredients.length === 0){
        transformedIngredients = <p> please add ingredients into the burger </p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type= 'bread-top' />
            {transformedIngredients}
            <BurgerIngredients type= 'bread-bottom' />
        </div>
    )
}
