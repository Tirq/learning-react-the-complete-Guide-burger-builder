import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const[names] = [props.names];
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
        </Aux>
    );
}

export default orderSummary;