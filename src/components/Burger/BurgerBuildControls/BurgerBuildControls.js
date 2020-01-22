import React from 'react';
import styles from './BurgerBuildControls.module.css';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';

const ingredientTypes =  [{ name: 'Cheese', price:3.3 },
                          { name: 'Meat', price:4.4 },
                          { name: 'Salad', price:1.1 },
                          { name: 'Bacon', price:2.2 }];

const burgerBuildControls = (props) => {

    const [names] = [props.names];

    const totalPrice = <p>
        Total price: <strong>{props.totalPrice}</strong>
    </p>;

    const controls = ingredientTypes.map( (ing,index) => (
        <BurgerBuildControl
            key={ing.name + '-' + index}
            label={ing.name}
            add={() => props.addIngredient(ing)}
            remove={() => props.removeIngredient(ing)}
            disabled={!names.includes(ing.name)} />
    ));

const orderButton = <button
                        className={styles.OrderButton}
                        onClick={props.orderBurger}
                        disabled={!names.length}>Order now!</button>;

    return (
        <div className={styles.BuildControls}>
            {totalPrice}
            {controls}
            {orderButton}
        </div>
    );

}

export default burgerBuildControls;