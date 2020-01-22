import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {
    state = {
        ingredients: [],
        totalPrice: 5.5,
        purchasing: false
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

    startOrderBurgerHandler = () => {
        this.setState({purchasing: true});
    }

    cancelOrderBurgerHandler = () => {
        this.setState({purchasing: false});
    }

    proceedOrderBurgerHandler = () => {
        alert('Your burger is on the way! Happy meal ;)');
    }

    render () {

        const names = () => this.state.ingredients.map(ing => ing.name);

        const totalPrice = () => this.state.totalPrice.toFixed(2);

        return (
            <Aux>
                <Modal show={this.state.purchasing}
                        onClose={this.cancelOrderBurgerHandler}>
                    <OrderSummary
                        names={names()}
                        totalPrice={totalPrice()}
                        cancel={this.cancelOrderBurgerHandler}
                        proceed={this.proceedOrderBurgerHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerBuildControls
                    names={names()}
                    removeIngredient={this.removeIngredientHandler}
                    addIngredient={this.addIngredientHandler}
                    totalPrice={totalPrice()}
                    orderBurger={this.startOrderBurgerHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;