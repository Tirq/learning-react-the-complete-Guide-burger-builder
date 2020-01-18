import React from 'react';
import styles from './BurgerBuildControls.module.css';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';

const ingredientTypes =  ['Cheese', 'Meat', 'Salad', 'Bacon'];

const burgerBuildControls = (props) => {

    return (
        <div className={styles.BuildControls}>
            {
                ingredientTypes.map(ctrl => (
                    <BurgerBuildControl  label={ctrl}/>
                ))
            }
        </div>
    );

}

export default burgerBuildControls;