import React from 'react';
import style from './NavigationItem.module.css';

const navigationItem = (props) => {

    const [link, active, children] = [props.link, props.active, props.children];

    return (
        <li className={style.NavigationItem}>
             <a className={active ? style.active : null}
                href={link}>{children}
            </a>  
        </li>
        
    );
}

export default navigationItem;