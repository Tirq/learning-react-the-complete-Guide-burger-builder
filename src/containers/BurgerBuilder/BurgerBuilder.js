import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: []
    }

    clonedIngredients = () => this.state.ingredients.slice();

    totalPrice = (ingredients) => ingredients.map(ing => ing.price).reduce((a,b) => a+b, 5);

    removeIngredientHandler = (ing) => {
        const ingredients = this.clonedIngredients();
        const index = ingredients.indexOf(ing);
        if(index > -1){
            ingredients.splice(index,1);
        }
        this.setState({ingredients});
        console.log(this.totalPrice(ingredients));
    }

    addIngredientHandler = (ing) => {
        const ingredients = this.clonedIngredients();
        ingredients.push(ing);
        this.setState({ingredients});
        console.log(this.totalPrice(ingredients));
    }

    render () {

        const names = () => this.state.ingredients.map(ing => ing.name);

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerBuildControls
                    names={names()}
                    removeIngredient={this.removeIngredientHandler}
                    addIngredient={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;