import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const [ingredients] = [props.ingredients];

    const burgerIngredients = (ingredients.length === 0) ?
        <p>Please start adding ingredients!</p> :
        props.ingredients.map((ingredient, index) => {
            return <BurgerIngredient type={ingredient} key={ingredient+'_'+index}/>
        });

    return (
        <div className={styles.Burger}>
           <BurgerIngredient type="BreadTop"/>
           {burgerIngredients}
           <BurgerIngredient type="BreadBottom"/>
        </div>        
    );
};

export default burger;