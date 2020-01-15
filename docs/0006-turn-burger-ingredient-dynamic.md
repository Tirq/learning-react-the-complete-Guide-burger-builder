# 0006-Turn-burger-ingredient-dynamic

[index](index.md)

<details>
<summary>
 <i>Small refactor on BurgerIngredient to reduce amount of code</i>
</summary>

BurgerIngredient.js:
```
import React from 'react';
import styles from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
    const [type]  = [props.type]; //new
    const ingredient = type === 'BreadTop' //new
    ?
        <div className={styles[type]}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
        </div>
    :
        <div className={styles[type]}></div>;
    return (
        ingredient
    )

};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
  };

export default burgerIngredient; 

```

</details>

<details>
<summary>
 <i>Burger builder is providing (using state) the ingredients</i>
</summary>

BurgerBuilder.js
```
import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = { //new
        ingredients: ['Cheese', 'Cheese', 'Meat', 'Meat', 'Salad', 'Bacon']
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} /> //new
                <div>Build controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;

```

</details>

<details>
<summary>
 <i>Burger now receive list of ingredients provided by BugerBuilder.js</i>
</summary>

Burger.js
```
import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const [ingredients] = [props.ingredients]; //new

    const burgerIngredients = (ingredients.length === 0) ? //new
        <p>Please start adding ingredients!</p> :
        props.ingredients.map((ingredient, index) => {
            return <BurgerIngredient type={ingredient} key={ingredient+'_'+index}/>
        });

    return (
        <div className={styles.Burger}>
           <BurgerIngredient type="BreadTop"/>
           {burgerIngredients} //new
           <BurgerIngredient type="BreadBottom"/>
        </div>        
    );
};

export default burger;

```

</details>