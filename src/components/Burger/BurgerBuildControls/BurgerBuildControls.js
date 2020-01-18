import React from 'react';
import styles from './BurgerBuildControls.module.css';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';

const ingredientTypes =  ['Cheese', 'Meat', 'Salad', 'Bacon'];

const burgerBuildControls = (props) => {

    const controls = ingredientTypes.map( (type,index) => (
        <BurgerBuildControl
            key={type + '-' + index}
            label={type}
            add={() => props.addIngredient(type)}
            remove={() => props.removeIngredient(type)} />
    ));

    return (
        <div className={styles.BuildControls}>
            {controls}
        </div>
    );

}

export default burgerBuildControls;