import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state= {
            employees: [],
            keyword: ''
        }
        this.addEmployee= this.addEmployee.bind(this)
        this.editEmployee= this.editEmployee.bind(this)
        this.showEmployeeSalry= this.showEmployeeSalry.bind(this)
    }

    componentDidMount(){
        // EmployeeService.getEmployee().then((res)=>{
        //     this.setState({employees: res.data})
        // })
        // alert(localStorage.getItem('employeeId'))
        this.searchEmployee()
    }

    handleChange =(event)=>{
        this.setState({
            keyword: event.target.value
        })
    }

    editEmployee = (id) =>{
        this.props.history.push(`/add-employee/${id}`)
    }

    addEmployee(){
        this.props.history.push(`/add-employee/-1`)
    }

    deleteEmployeebyId = (id) =>{
        EmployeeService.deleteEmployeeById(id).then(() =>{
            EmployeeService.getEmployee().then((res)=>{
                this.setState({employees: res.data})
            })
        })
    }

    searchEmployee = () =>{
        var searchObject={keyword: this.state.keyword}
        EmployeeService.getEmployeeSearch(searchObject).then((res)=>{
            this.setState({employees: res.data})
        })
    }

    showEmployeeSalry = () =>{
        this.props.history.push("/salary")
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                <input onChange={this.handleChange} value={this.state.keyword} style={{width: '300px', height: '35px'}}></input>
                <button className="btn btn-primary" onClick={this.searchEmployee} style={{marginLeft: '10px'}}>Search</button>
                <button className="btn btn-primary" onClick={this.addEmployee} style={{marginLeft: '20px'}}>Add Employee</button>  
                <button className="btn btn-primary" onClick={this.showEmployeeSalry} style={{marginLeft: '400px'}}>Employee Salary </button>
                            </div>
                <div className="row">
                    <table className="table table-striped table-border">
                        <thead>
                            <tr>
                                <th>Id Employee</th>
                                <th>Id Card</th>
                                <th>Name</th>
                                <th>Date Of Birth</th>
                                <th>Address</th>
                                <th>Level</th>
                                <th>Seniority</th>
                                <th>Position</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key={employee.id}>
                                    <td>{employee.idEmp}</td>
                                        <td>{employee.idCard}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.date}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.level}</td>
                                        <td>{employee.seniority}</td>
                                        <td>{employee.position}</td>
                                        <td>
                                            <button onClick={()=>this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                            <button onClick={()=>this.deleteEmployeebyId(employee.id)} className="btn btn-danger" style={{marginLeft: '10px'}}>Delete</button>
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
