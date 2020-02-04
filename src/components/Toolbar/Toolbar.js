import React from 'react';
import style from './Toolbar.module.css';
import Logo from '../Logo/Logo';

const toolbar = () => {
    return (
        <header className={style.Toolbar}>
            <div>MENU</div>
            <Logo></Logo>
            <nav>
                ...
            </nav>
        </header>
    );
}

export default toolbar;