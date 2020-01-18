import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: ['Cheese', 'Cheese', 'Meat', 'Meat', 'Salad', 'Bacon']
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerBuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;