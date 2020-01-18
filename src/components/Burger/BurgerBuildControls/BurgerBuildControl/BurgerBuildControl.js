import React from 'react';
import styles from './BurgerBuildControl.module.css';

const burgerBuildControl = (props) => {
    const [label] = [props.label];

    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{label}</div>
            <button className={styles.Less}>Less</button>
            <button className={styles.More}>More</button>
        </div>
    );

}

export default burgerBuildControl;