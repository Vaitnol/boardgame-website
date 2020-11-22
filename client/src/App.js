import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {useRoutes} from './routes';
import './App.css';

export default function App() {
  // const routes = useRoutes(false)
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
    // <Router>
    //   <>
    //     {routes}
    //   </>
    // </Router>
  )
}