import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import accountService from '../services/AccountService'
export default class ListAccountComponent extends Component {
    constructor(props){
        super(props)

        this.state= {
            accounts: [],
            keyword: ''
        }
        this.addaccount= this.addaccount.bind(this)
       
    }

    componentDidMount(){
        // EmployeeService.getEmployee().then((res)=>{
        //     this.setState({employees: res.data})
        // })
        this.searchaccount()
    }

    handleChange =(event)=>{
        this.setState({
            keyword: event.target.value
        })
    }

    editAccount = (id) =>{
        this.props.history.push(`/add-accounts/${id}`)
    }

    addaccount(){
        this.props.history.push(`/add-accounts/-1`)
    }

    deleteAccountById = (id) =>{
        accountService.deleteAccountById(id).then(() =>{
            this.searchaccount()
        })
    } 


    searchaccount = () =>{
        var searchObject={keyword: this.state.keyword}
       
        accountService.getAllAccount(searchObject).then((res)=>{
            this.setState({accounts: res.data})
        })
        // accountService.getAllAccount()
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Accounts List</h2>
                <div className="row">
           
                <input onChange={this.handleChange} value={this.state.keyword} style={{width: '300px'}}></input>
                <button className="btn btn-primary" onClick={this.searchaccount} style={{marginLeft: '10px'}}>Search</button>
                <button className="btn btn-primary" onClick={this.addaccount} style={{marginLeft: '55%'}}>Add account</button>                </div>
                <div className="row">
                    <table className="table table-striped table-border">
                        <thead>
                            <tr>
                                <th>Id account</th>
                                <th>Type</th>
                                <th>Balance</th>
                                <th>Limit Balance</th>
                                <th>Limit Credit</th>
                                <th>Monthly Interest</th>
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
                                        <td>{account.limitBalance}</td>
                                        <td>{account.limitCredit}</td>
                                        <td>{account.monthlyInterest}</td>
                                        <td>
                                            <button onClick={()=>this.editAccount(account.id)} className="btn btn-info">Update</button>
                                            <button onClick={()=>this.deleteAccountById(account.id)} className="btn btn-danger" style={{marginLeft: '10px'}}>Delete</button>
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
