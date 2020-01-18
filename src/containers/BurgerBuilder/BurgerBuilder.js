import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: []
    }

    removeIngredientHandler = (type) => {
        const ingredients = this.state.ingredients.slice();
        const index = ingredients.indexOf(type);
        if(index > -1){
            ingredients.splice(index,1);
        }
        this.setState({ingredients});
    }

    addIngredientHandler = (type) => {
        const ingredients = this.state.ingredients.slice();
        ingredients.push(type);
        this.setState({ingredients});
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerBuildControls
                    removeIngredient={this.removeIngredientHandler}
                    addIngredient={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;