import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './BurgerIngredients.css';

class BurgerIngredients extends React.Component {
    render() {
        let ingredient = null;

    switch(this.props.type) {
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case('bread-top'):
            integration = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1} ></div>
                    <div className={classes.Seeds2} ></div>
                </div>
            );
            break;
        case('meat'):
            integration = <div className={classes.Meat}></div>;
            break; 
        case('cheese'):
            integration = <div className={classes.Cheese}></div>;
            break;
        case('bacon'):
            integration = <div className={classes.Bacon}></div>;
            break;
        case('salad'):
            integration = <div className={classes.Salad}></div>;
            break;
        default:
            ingredient = null;           
    }
    return indredient;
    }
}

BurgerIngredients.prototype = {
    type: PropTypes.string.isRequired
}


export default BurgerIngredients
