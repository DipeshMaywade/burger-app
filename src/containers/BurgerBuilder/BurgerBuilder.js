import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
    cheese : 0.4,
    salad : 0.5,
    bacon : 0.7,
    meat : 1.3,
};

export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese : 0,
            salad : 0,
            bacon : 0,
            meat : 0,
        },
        totalPrice: 4
    }

    addIngredientsHandler = (type) => {
         const oldCount = this.state.ingredients[type];
         const updatedCount = oldCount + 1;
         const updatedIngredients = {
             ...this.state.ingredients
         };
         updatedIngredients[type] = updatedCount;
         const priceAddition = INGREDIENT_PRICE[type];
         const oldPrice = this.state.totalPrice;
         const newPrice = oldPrice + priceAddition;
         this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
     }

     removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded = {this.addIngredientsHandler}
                    ingredientRemover = {this.removeIngredientsHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}
                    />
            </div>
        )
    }
}
