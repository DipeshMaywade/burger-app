import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'


export default function BuildControls(props) {

    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
    ];

    return (
        <div className = {classes.BuildControls}>
            <p>Curren Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label}
                 label={ctrl.label}
                 added= {() => props.ingredientAdded(ctrl.type)}
                 removed= {() => props.ingredientRemover(ctrl.type)}
                 disabled = {props.disabled[ctrl.type]}
                 />
            ))}
        </div>
    )
}
