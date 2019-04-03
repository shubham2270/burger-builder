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
        {controls.map(ctrl => (
            <Control 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientsAdded(ctrl.type)}
                />
        ))}
     
    </div>
  )
}

export default BuildControl;
