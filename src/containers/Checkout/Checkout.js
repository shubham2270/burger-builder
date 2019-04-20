import React, { Component } from 'react'

import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';

class Checkout extends Component {
    //Dummy state
    state = {
        ingredients: {
            salad: 1,
            tomato: 1,
            cheese: 1,
            corn: 1
        }
    }


  render() {
    return (
      <div>
        <CheckoutSummery ingredients={this.state.ingredients}/>
      </div>
    )
  }
}

export default Checkout;
