import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import accountService from '../services/AccountService'
export default class ListCreditCard extends Component {
    constructor(props){
        super(props)

        this.state= {
            accounts: [],
            keyword: ''
        }
    }

    componentDidMount(){
        // EmployeeService.getEmployee().then((res)=>{
        //     this.setState({employees: res.data})
        // })
        this.searchaccount()
    }

    searchaccount = () =>{
        var id = localStorage.getItem('customerId')
        accountService.getListCreditCard(id).then((res)=>{
            this.setState({accounts: res.data})
        })
    }

    payment = (id) =>{
        // var id = localStorage.setItem('account', id)
        this.props.history.push(`/payment/${id}`)
    }
    render() {
        return (
            <div>
                <h2 className="text-center">CreditCard Managment</h2>
                <div className="row">
                              </div>
                <div className="row">
                    <table className="table table-striped table-border">
                        <thead>
                            <tr>
                                <th>Id account</th>
                                <th>Type</th>
                                <th>Debit Balance</th>
                                <th>Limit Credit</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.accounts.map(
                                    account => 
                                    <tr key={account.id}>
                                    <td>{account.idAccount}</td>
                                        <td>{account.type}</td>
                                        <td>{account.balance}</td>
                                        <td>{account.limitCredit}</td>
                                        <td>
                                            <button onClick={()=>this.payment(account.id)} className="btn btn-info">Payment</button>
                                            {/* <button onClick={()=>this.deleteAccountById(account.id)} className="btn btn-danger" style={{marginLeft: '10px'}}>Delete</button> */}
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
