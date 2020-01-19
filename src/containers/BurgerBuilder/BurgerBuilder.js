import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: [],
        totalPrice: 5.5
    }

    clonedIngredients = () => this.state.ingredients.slice();

    calculateTotalPrice = (ingredients) => ingredients.map(ing => ing.price)
                                             .reduce((a,b) => a+b, 5.5);

    removeIngredientHandler = (ing) => {
        const ingredients = this.clonedIngredients();
        const index = ingredients.indexOf(ing);
        if(index > -1){
            ingredients.splice(index,1);
        }
        const totalPrice = this.calculateTotalPrice(ingredients);
        this.setState({ingredients, totalPrice});
    }

    addIngredientHandler = (ing) => {
        const ingredients = this.clonedIngredients();
        ingredients.push(ing);
        const totalPrice = this.calculateTotalPrice(ingredients);
        this.setState({ingredients, totalPrice});
    }

    orderBurger = () => {
        alert('Your burger is being prepared!');
    }

    render () {

        const names = () => this.state.ingredients.map(ing => ing.name);

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerBuildControls
                    names={names()}
                    removeIngredient={this.removeIngredientHandler}
                    addIngredient={this.addIngredientHandler}
                    totalPrice={this.state.totalPrice}
                    orderBurger={this.orderBurger}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;