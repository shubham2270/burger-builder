import React, {Component} from 'react';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state == {}
    // }
    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            tomato: 2,
            corn: 2
        }
    }

    render() {
        return (
         <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <div>Build Controls</div>
        </Aux>
        ) 
    }
}

export default BurgerBuilder;