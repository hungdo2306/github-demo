
import ListEmployeeComponent from './ListEmployeeComponent.jsx'
import React, { Component } from 'react'
import ListCustomerComponent from './ListCustomerComponent.jsx'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import CreateEmployeeComponent from './CreateEmployeeComponent'
import CreateCustomerComponent from './CreateCustomerComponent'
import TopDebitBalanceAccount from './TopDebitBalanceAccount'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddBankAccountComponent from './AddBankAccountComponent';
import ListAccountComponent from './ListAccountComponent';
import CreateAccountComponent from './CreateAccountComponent'
import TopTotalBalance from './TopTotalBalance';
import ListEmployeeSalaryComponent from './ListEmployeeSalaryComponent'
import ListCustomerAccountComponent from './ListCustomerAccountComponent'
import AddMoneyToBankAccountComponent from './AddMoneyToBankAccountComponent'
export default class Dashboard extends Component {

  render() {
      return (
        <div>
        <Router>
    
          <HeaderComponent />
        <div className="container">
        <Switch>
        <Route path="/" exact component={ListEmployeeComponent}></Route>
        <Route path="/employees" component={ListEmployeeComponent}></Route>
        <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
    
        {/* <Route path="/" exact component={ListCustomerComponent}></Route> */}
        <Route path="/customer" component={ListCustomerComponent}></Route>
        <Route path="/add-customer/:id" component={CreateCustomerComponent}></Route>
        <Route path="/add-account/:id" component={AddBankAccountComponent}></Route>
    
        <Route path="/account" component={ListAccountComponent}></Route>
        <Route path="/add-accounts/:id" component={CreateAccountComponent}></Route>
        <Route path="/sign-in" component={ListEmployeeSalaryComponent}></Route>
        <Route path="/salary" component={ListEmployeeSalaryComponent}></Route>
        <Route path="/list-bank-account/:id" component={ListCustomerAccountComponent}></Route>
        
        <Route path="/add-money/:id" component={AddMoneyToBankAccountComponent}></Route>
        <Route path="/debit-balance" component={TopDebitBalanceAccount}></Route>
        <Route path="/top-total" component={TopTotalBalance}></Route>


        {/* <Route path="/update-employee" component={UpdateEmployeeComponent}></Route>  */}
          <ListEmployeeComponent />
          </Switch>
        </div>
        </Router>
        </div>
      )
  }
}
