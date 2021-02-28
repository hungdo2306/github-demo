import React, { Component } from 'react'
import ListEmployeeComponent from './ListEmployeeComponent.jsx'
import ListCustomerComponent from './ListCustomerComponent.jsx'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import CreateEmployeeComponent from './CreateEmployeeComponent'
import CreateCustomerComponent from './CreateCustomerComponent'
import UpdateEmployeeComponent from './UpdateEmployeeComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddBankAccountComponent from './AddBankAccountComponent';
import ListAccountComponent from './ListAccountComponent';
import CreateAccountComponent from './CreateAccountComponent'
import SignInComponent from './SignInComponent';
import Dashboard from './Dashboard'
import CustomerHome from './CustomerHome'
import RegisterComponent from './RegisterComponent'


export default class Home extends Component {
    render() {
        return (
            <div>
                 <Router>

{/* <HeaderComponent /> */}
<div className="container">
<Switch>
<Route path="/" exact component={SignInComponent}></Route>
<Route path="/dashboard" component={Dashboard}></Route>
<Route path="/customer" component={ListCustomerComponent}></Route>
<Route path="/customer-home" component={CustomerHome}></Route>
<Route path="/register" component={RegisterComponent}></Route>

</Switch>
</div>
</Router>
            </div>
        )
    }
}
