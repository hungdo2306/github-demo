import React, { Component } from 'react'
import LoginAccountService from '../services/LoginAccountService'
import CustomerService from '../services/CustomerService'
import AccountService from '../services/AccountService'
// anh hung day
export default class AddMoneyToBankAccountComponent extends Component {
    constructor(props){
        super(props)

       this.state={
        id: this.props.match.params.id,
        money: '',
       }
    }

    moneyHandleChange = (event)=>{
        this.setState({
            money: event.target.value
        })
    }

    addMoney = () =>{ 
        var object={balance: this.state.money}
        AccountService.addMoney(this.state.id, object).then((res)=>{
            if(res.data ==true){
                var ids= localStorage.getItem('id')
        this.props.history.push(`/list-bank-account/${ids}`)
            }else{
                alert("haha")
            }
        })
    }

    cancels = (id) =>{
      var ids= localStorage.getItem('id')
        this.props.history.push(`/list-bank-account/${ids}`)
    }

    render() {
        return (
            <div className= "container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add money to Customer's account</h3>
                        <div className="card-body>">
                            
                                <div className="form group">
                                    <label>Type money : </label>
                                    <input className="form-control" value={this.state.money} onChange={this.moneyHandleChange}></input>
                                </div>

                                <button className="btn btn-success" onClick={this.addMoney} style={{marginTop: '10px'}}>Save</button>
                                <button className="btn btn-success" onClick={() => this.cancels(this.state.id)}  style={{marginTop: '10px', marginLeft: '10px'}}>Cancel</button>
                    
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
