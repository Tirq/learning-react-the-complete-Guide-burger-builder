# 0008-add-actions-burger-build-controls

[index](index.md)

<details>
<summary>
 <i>Add and remove actions to handle ingredients, using slice instead of spread(...), to handle with empty array.</i>
</summary>

BurgerBuilder.js:
```
    ...
    state = {
        ingredients: []
    }

    removeIngredientHandler = (type) => {
        const ingredients = this.state.ingredients.slice();
        const index = ingredients.indexOf(type);
        if(index > -1){
            ingredients.splice(index,1);
        }
        this.setState({ingredients});
    }

    addIngredientHandler = (type) => {
        const ingredients = this.state.ingredients.slice();
        ingredients.push(type);
        this.setState({ingredients});
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerBuildControls
                    removeIngredient={this.removeIngredientHandler}
                    addIngredient={this.addIngredientHandler}/>
            ...

```

BurgerBuildControls.js:
```
...
    const controls = ingredientTypes.map( (type,index) => (
        <BurgerBuildControl
            key={type + '-' + index}
            label={type}
            add={() => props.addIngredient(type)}
            remove={() => props.removeIngredient(type)} />
    ));

    return (
        <div className={styles.BuildControls}>
            {controls}
        </div>
    );
...
```

BurgerBuildControl.js:
```
...
const burgerBuildControl = (props) => {
    const [label, add, remove] = [props.label, props.add, props.remove];

    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}> {label} </div>
            <button className={styles.Less} onClick={remove}>Less</button>
            <button className={styles.More} onClick={add}>More</button>
        </div>
    ...
```

</details>