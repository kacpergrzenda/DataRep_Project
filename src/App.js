import './App.css';
import { Component } from 'react';//import Component
import 'bootstrap/dist/css/bootstrap.min.css'; //import bootstrap
import { Navbar, Nav } from 'react-bootstrap'; //import react bootstrap items

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Menu } from './components/menu';
import { Order } from './components/order';
import { Main } from './components/main';
import { Edit } from './components/edit';
import { FoodItem } from './components/foodItem';
import { Special } from './components/special';

//Class "App" inherits from react.component
class App extends Component {
  render() {
    return (
      // Router linking components
      <Router>
        <div className="App" style={{ backgroundColor: "black" }}>
          <Navbar style={{ backgroundColor: "black", fontFamily: "Times New Roman" }} variant="dark">
            <Navbar.Brand href="/">Le Kacper Restaurant</Navbar.Brand>
            <Nav >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/specials">Specials</Nav.Link>
              <Nav.Link href="/orders">Orders</Nav.Link>
              
            </Nav>
          </Navbar>

          <br />
          {/* Switch through Navigation Bar */}
          <Switch>
            <Route path='/' component={Main} exact /> {/* this just show Main in the / path */}
            <Route path='/menu' component={Menu} exact /> {/* this just shows the menu in the menu */}
            <Route path='/orders' component={Order} exact /> {/* this just shows the order in the orders path */}
            <Route path='/specials' component={Special} exact /> {/* this just shows the order in the orders path */}
            <Route path='/edit/:id' component={Edit}></Route> {/* this just shows the edit in the order edit but not directly */}
          </Switch>

        </div>
      </Router>

    );
  }
}

export default App;
