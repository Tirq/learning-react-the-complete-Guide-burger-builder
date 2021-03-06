import React from 'react';
import style from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (
        <ul className={style.NavigationItems}>
            <NavigationItem link='/' active>Burger builder</NavigationItem>
            <NavigationItem link='/'>Checkout</NavigationItem>
        </ul>
    );
}

export default navigationItems;