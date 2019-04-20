import React from 'react'

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummery.module.css';

function CheckoutSummery(props) {
  return (
    <div className={styles.CheckoutSummery}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
            <Burger ingredients={props.ingredients}/>
      </div>
        <Button 
            clicked
            btnType="Danger">CANCEL</Button>
        <Button 
            clicked
            btnType="Success">CONTINUE</Button>
    </div>
  )
}

export default  CheckoutSummery