import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'

export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad : 1,
            bacon : 1,
            cheese : 2,
            meat : 2,
        }
    }

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controlers</div>
            </div>
        )
    }
}
