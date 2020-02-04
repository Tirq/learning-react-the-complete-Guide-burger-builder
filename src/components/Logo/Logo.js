import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import style from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={style.Logo}>
            <img src={burgerLogo} alt='Burger'/>
        </div>
    );
}

export default logo;