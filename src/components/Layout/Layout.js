import React from 'react';
import Aux from '../../hoc/Aux';
import style from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>Will be replaced with Toolbar, SideDrawer and BackDrop</div>
        <main className={style.Content}>
            {props.children}
        </main>        
    </Aux>
);

export default layout;