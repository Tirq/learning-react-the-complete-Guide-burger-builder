import React from 'react';
import styles from './BurgerBuildControls.module.css';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';

const ingredientTypes =  [{ name: 'Cheese', price:3.3 },
                          { name: 'Meat', price:4.4 },
                          { name: 'Salad', price:1.1 },
                          { name: 'Bacon', price:2.2 }];

const burgerBuildControls = (props) => {

    const totalPrice = <p>
        Total price: <strong>{props.totalPrice.toFixed(2)}</strong>
    </p>;

    const controls = ingredientTypes.map( (ing,index) => (
        <BurgerBuildControl
            key={ing.name + '-' + index}
            label={ing.name}
            add={() => props.addIngredient(ing)}
            remove={() => props.removeIngredient(ing)}
            disabled={!props.names.includes(ing.name)} />
    ));
    return (
        <div className={styles.BuildControls}>
            {totalPrice}
            {controls}
        </div>
    );

}

export default burgerBuildControls;