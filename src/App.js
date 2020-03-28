import React from 'react'
import './App.scss'
//Pages
import Homepage from './components/pages/home/HomePage.component'
import ShopPage from './components/pages/shop/ShopPage.component'

//Routing
import { Route , Switch } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
