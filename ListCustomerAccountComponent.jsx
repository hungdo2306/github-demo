import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import CustomerService from '../services/CustomerService'
import AccountService from '../services/AccountService'
export default class ListCustomerAccountComponent extends Component {
    constructor(props){
        super(props)

        this.state= {
            list: [],
            id: this.props.match.params.id,
            keyword: ''
        }

    }

    componentDidMount(){
        // EmployeeService.getEmployee().then((res)=>{
        //     this.setState({employees: res.data})
        // })
        this.searchCustomer()
    }

    searchCustomer = () =>{
       AccountService.getCustomerAccount(this.state.id).then((res) =>{
           this.setState({list: res.data})
       })
    }

    addMoney = (id) =>{
        // this.props.history.push(`/add-money/${id}`)
        // alert("haha")
        this.props.history.push(`/add-money/${id}`)
    }
    render() {
        return (
            <div>
            <h2 className="text-center">List Customer Account</h2>
            <div className="row">
                <table className="table table-striped table-border">
                    <thead>
                    <tr>
                            <th>Id Account</th>
                                <th>Type</th>
                                <th>Balance</th>
                                <th>Limit Balance</th>
                                <th>Limit Credit</th>
                                <th>Monthly Interest</th>
                            
                            </tr>
                    </thead>
                    <tbody>
                    {
                                this.state.list.map(
                                    account => 
                                    <tr key={account.id}>
                                    <td>{account.idAccount}</td>
                                        <td>{account.type}</td>
                                        <td>{account.balance}</td>
                                        <td>{account.limitBalance}</td>
                                        <td>{account.limitCredit}</td>
                                        <td>{account.monthlyInterest}</td>
                                        <td>
                                            <button onClick={()=>this.addMoney(account.id)} className="btn btn-info">Add money</button>
                                            {/* <button onClick={()=>this.addMoney(account.id)} className="btn btn-danger" style={{marginLeft: '10px'}}>Delete</button> */}
                                        </td>
                                    </tr>
                                )
                            }
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}
