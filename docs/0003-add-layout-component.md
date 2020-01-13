# 0003-add-layout-component

[index](index.md)

<details>
<summary>
<i>Create structure folders:  
  * hoc means high order component  
</i>
</summary>
```
  cd $root/src/
  mkdir components
  mkdir containers
  mkdir assets
  mkdir hoc
```
</details>

<details>
<summary>
<i>Create simple hoc Aux just to wrap more than one tag:  </i>
</summary>
```
  cd $root/src/
  cd hoc/
  touch Aux.js
```
Aux.js: 
```
const aux = (props) => props.children; 
export default aux; 
```
</details>

<details>
<summary>
<i>Create Layout component:  </i>
</summary>

```
  cd $root/src/components/
  mkdir Layout
  cd Layout/
  touch Layout.js
```
Layout.js:
```
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
```
</details>

<details>
<summary>
<i>Using Layout in App:  </i>
</summary>

```
import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <p>Under Construction ...</p>
        </Layout>
      </div>
    );
  }
}
export default App; 

```
</details>


