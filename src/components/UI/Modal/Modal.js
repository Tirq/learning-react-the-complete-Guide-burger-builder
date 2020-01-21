import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const modal = (props) => {
    const [children, show, onClose] = [props.children, props.show, props.onClose];
    return (
        <Aux>
            <Backdrop show={show} onClose={onClose}></Backdrop>
            <div className={styles.Modal}
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0'
                }}>
                {children}
            </div>
        </Aux>
    );
}

export default modal;