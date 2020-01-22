import React from 'react';
import styles from './Button.module.css'

const button = (props) => {
const [clicked, type, name] = [props.clicked, props.type, props.name];
const fullStyle = [styles.Button, styles[type]].join(' ');

    return (
        <button onClick={clicked} className={fullStyle}>{name}</button>
    );
    
};

export default button;