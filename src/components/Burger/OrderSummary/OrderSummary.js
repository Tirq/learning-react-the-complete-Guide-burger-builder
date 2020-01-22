import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from './../../UI/Button/Button';

const orderSummary = (props) => {
    const[names, totalPrice, cancel, proceed] =
    [props.names, props.totalPrice, props.cancel, props.proceed];

    const title = <h3>Order summary</h3>;
    const groupByName = [];

    names.forEach(i => {
             const value = groupByName[i];
             typeof value === 'undefined' ?
               groupByName[i] = 1
             : groupByName[i] = value + 1
            });

    const ingredients = Object.keys(groupByName)
    .map( key => <li key={key}>{key}({groupByName[key]})</li>);

    return(
        <Aux>
            {title}
            <ul>{ingredients}</ul>
            <p>Total price: <strong>{totalPrice}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={cancel} type="Cancel" name='CANCEL'/>
            <Button clicked={proceed} type='Ok' name='CONTINUE'/>
        </Aux>
    );
}

export default orderSummary;