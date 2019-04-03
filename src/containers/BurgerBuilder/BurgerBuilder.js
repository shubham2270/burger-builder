import React, {Component} from 'react';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControl from '../../components/Burger/BuildControls/BuildControl';


const INGREDIENT_PRICES = {
    salad: 60,
    cheese: 95,
    tomato: 35,
    corn: 65
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state == {}
    // }
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            tomato: 0,
            corn: 0
        },
        totalPrice: 200
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }
    
    removeIngredientHandler = (type) => {

    }

    render() {
        return (
         <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControl 
                ingredientsAdded={this.addIngredientHandler}
            />
        </Aux>
        ) 
    }
}

export default BurgerBuilder;