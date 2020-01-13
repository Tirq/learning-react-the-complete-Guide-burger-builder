import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => (
    <Aux>
        <div>Will be replaced with Toolbar, SideDrawer and BackDrop</div>
        <main>
            {props.children}
        </main>        
    </Aux>
);

export default layout;