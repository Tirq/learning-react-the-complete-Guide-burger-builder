# 0004-add-initial-burguer-builder

[index](index.md)

<details>
<summary>
 <i>Create initial burger-builder container(will keep state)</i>
</summary>

```
  cd $root/src/containers/
  mkdir BurgerBuilder
  cd BurgerBuilder/
  touch BurgerBuilder.js
```
BurgerBuilder.js
```
import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <div>Burger</div>
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
 <i>Add BurgerBuilder on App.js</i>
</summary>

App.js
```
import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurguerBuilder from './containers/BurgerBuilder/BurguerBuilder'; //new

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurguerBuilder/> //new
        </Layout>
      </div>
    );
  }
}

export default App;
```
</details>

<details>
<summary>
 <i>Add module css for Layout.js (css not global)</i>
</summary>

```
  cd $root/src/components/Layout/
  touch Layout.module.css
```

Layout.module.css
```
.Content{
    margin-top: 16px;
}
```

Layout.js
```
import React from 'react';
import Aux from '../../hoc/Aux';
import style from './Layout.module.css'; //new

const layout = (props) => (
    <Aux>
        <div>Will be replaced with Toolbar, SideDrawer and BackDrop</div>
        <main className={style.Content}> //new
            {props.children}
        </main>
    </Aux>
);

export default layout;
```
</details>

