# 0005-add-initial-ingredient-burguer

[index](index.md)

<details>
<summary>
 <i>Add prop-type --save to add on package.json</i>
</summary>

```
  npm install --save prop-types 
```

</details>

<details>
<summary>
 <i>Create initial ingredient burger</i>
</summary>

```
  cd $root/src/components/
  mkdir Burger
  cd Burger/
  mkdir BurgerIngredient
  cd BurgerIngredient/
  touch BurgerIngredient.js
  touch BurgerIngredient.module.css
```
BurgerIngredient.js
```
import React from 'react';
import styles from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
    let ingredient = null;
    switch(props.type){
        case('bread-bottom'):
            ingredient = <div className={styles.BreadBottom}></div>;
            break;
        case('bread-top'):
            ingredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>
            );
            break;
        case('meat'):
            ingredient = <div className={styles.Meat}></div>;
            break;
        case('cheese'):
            ingredient = <div className={styles.Cheese}></div>;
            break;
        case('salad'):
            ingredient = <div className={styles.Salad}></div>;
            break;
        case('bacon'):
            ingredient = <div className={styles.Bacon}></div>;
            break;
        default:
            ingredient = null;
    }

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
 <i>Add BurgerIngredient in BurgerBuilder - static way</i>
</summary>

```
import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger' //new

class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <Burger/> //new
                <div>Build controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
```

</details>