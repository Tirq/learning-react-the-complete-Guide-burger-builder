# 0007-add-static-burger-build-controls

[index](index.md)

<details>
<summary>
 <i>Creating new burger build controls structure</i>
</summary>

```
  cd $root/src/components/Burger/
  mkdir BurgerBuildControls
  cd BurgerBuildControls/
  touch BurgerBuildControls.js
  touch BurgerBuildControls.module.css
  mkdir BurgerBuildControl
  cd BurgerBuildControl/
  touch BurgerBuildControl.js
  touch BurgerBuildControl.module.css
```

BurgerBuildControl.js:
```
import React from 'react';
import styles from './BurgerBuildControl.module.css';

const burgerBuildControl = (props) => {
    const [label] = [props.label];

    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{label}</div>
            <button className={styles.Less}>Less</button>
            <button className={styles.More}>More</button>
        </div>
    );

}

export default burgerBuildControl;
```

BurgerBuildControls.js:
```
import React from 'react';
import styles from './BurgerBuildControls.module.css';
import BurgerBuildControl from './BurgerBuildControl/BurgerBuildControl';

const ingredientTypes =  ['Cheese', 'Meat', 'Salad', 'Bacon'];

const burgerBuildControls = (props) => {

    return (
        <div className={styles.BuildControls}>
            {
                ingredientTypes.map(ctrl => (
                    <BurgerBuildControl  label={ctrl}/>
                ))
            }
        </div>
    );

}

export default burgerBuildControls;
```

BurgerBuilder.js:
```
...
import Burger from '../../components/Burger/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls'; //new

class BurgerBuilder extends Component {
    ...
    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerBuildControls /> //new
            </Aux>
    ...

```
</details>