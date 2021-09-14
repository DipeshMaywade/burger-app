import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'

export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese : 2,
            salad : 1,
            bacon : 2,
            meat : 1,
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
