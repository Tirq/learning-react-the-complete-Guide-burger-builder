import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingredients: ['Cheese', 'Cheese', 'Meat', 'Meat', 'Salad', 'Bacon']
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;