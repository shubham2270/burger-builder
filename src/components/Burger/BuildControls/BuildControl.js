import React from 'react'

import styles from './BuildControl.module.css'
import Control from './Control/Control';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Corn', type: 'corn'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Tomato', type: 'tomato'},
]

const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <p>Current Price = <strong>₹{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <Control 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientsAdded(ctrl.type)}
                removed={() => props.ingredientsRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
        ))}
      <button 
        className={styles.OrderButton} 
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
  )
}

export default BuildControl;
