import React from 'react';
import styles from './BurgerBuildControls.module.css';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';

const ingredientTypes =  [{ name: 'Cheese', price:3.0 },
                          { name: 'Meat', price:4.0 },
                          { name: 'Salad', price:1.0 },
                          { name: 'Bacon', price:2.0 }];

const burgerBuildControls = (props) => {

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
            {controls}
        </div>
    );

}

export default burgerBuildControls;