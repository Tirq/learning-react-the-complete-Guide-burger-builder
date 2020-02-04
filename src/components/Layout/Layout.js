import React from 'react';
import Aux from '../../hoc/Aux';
import style from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className={style.Content}>
            {props.children}
        </main>        
    </Aux>
);

export default layout;