import React from 'react';
import styles from './BurgerBuildControl.module.css';

const burgerBuildControl = (props) => {
    const [label, add, remove, disabled] = [props.label, props.add, props.remove, props.disabled];

    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}> {label} </div>
            <button
                className={styles.Less}
                onClick={remove}
                disabled={disabled}>Less</button>
            <button className={styles.More} onClick={add}>More</button>
        </div>
    );

}

export default burgerBuildControl;