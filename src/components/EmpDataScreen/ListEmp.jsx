import React from 'react';
import './empdata.css';

const ListEmp = ({id, employee_name,employee_salary ,employee_age, handleChange }) =>{
    return (

            <tr>
                <td><input type="checkbox" className="input-btn" name={employee_name} value={id} onChange={handleChange} /></td>
                <td>{id}</td>
                <td>{employee_name}</td>
                <td>{employee_salary}</td>
                <td>{employee_age}</td>
            </tr>
    )
}
export default ListEmp;