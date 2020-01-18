import React from 'react';
import styles from './BurgerBuildControl.module.css';

const burgerBuildControl = (props) => {
    const [label, add, remove] = [props.label, props.add, props.remove];

    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}> {label} </div>
            <button className={styles.Less} onClick={remove}>Less</button>
            <button className={styles.More} onClick={add}>More</button>
        </div>
    );

}

export default burgerBuildControl;