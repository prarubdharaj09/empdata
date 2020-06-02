import React, { Component } from 'react';
import axios from 'axios';
import ListEmp from './ListEmp';
import EditScreen from './editScreen';
import './empdata.css';

class EmpDataScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            empList: [],
            // editList: [],
            islogged: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.handlebutton = this.handlebutton.bind(this)
    }

    componentDidMount() {
        this.getEmployeeData();
    }
    getEmployeeData() {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => {
                const tempEmpList = res.data.data.map((emp) => {
                    emp.selected = false;
                    return emp;
                });
                this.setState({ empList: tempEmpList })
            })
            .catch(error => {
                console.log('Error', error)
            })
    }
    deleteItem(){
        const { empList } = this.state;
        const filteredEmpList = empList.filter((emp) => !emp.selected);
        this.setState({ empList: filteredEmpList });        
    
    }
    // editItem(){
    //     const { empList } = this.state;
    //     const filteredEditList = empList.filter((emp) => emp.selected);
    //     this.setState({ editList: filteredEditList });   
    // }

    handleChange(e) {
        const elem = e.target;
        const empItem = this.state.empList.find((emp) => emp.id === elem.value);
        empItem.selected = elem.checked;
    }
    render() {
        const { empList, editList } = this.state;
        return (
            <div>
                
                <div className="btn-flex">
                    <button className="btn btn-delete" onClick = {this.deleteItem}>Delete</button>
                    <button className="btn btn-edit" onClick = {this.editItem}>Edit</button>
                </div>
                <div className="editModel"> 
                    {
                        editList.map(edit => {
                            return (
                                <EditScreen key={edit.id} handlebutton={this.handlebutton} {...edit}/>
                            )
                        })
                    }
                </div>
                <table>
                    <tbody>
                    
                    { empList.map(emp => {
                    return (
                                <ListEmp key={emp.id} handleChange={this.handleChange} {...emp} />
                            )
                        }
                    )
                    }   
                    </tbody>
                </table>
            </div>
        )
    }
}
export default EmpDataScreen;

