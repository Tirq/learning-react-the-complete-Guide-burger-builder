import React from 'react';
import styles from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
    const [type]  = [props.type];
    const ingredient = type === 'BreadTop'
    ?
        <div className={styles[type]}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
        </div>
    :
        <div className={styles[type]}></div>;
    return (
        ingredient
    )

};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
  };

export default burgerIngredient; 
