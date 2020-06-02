import React from 'react';
import './empdata.css';

const EditScreen = ({id, employee_name,employee_salary ,employee_age, handlebutton}) =>{

    return( 
                <div>
                    <input type="text" maxLength="10" placeholder= {employee_name} />
                    <input type="number" maxLength = "10" placeholder= {employee_salary}/>
                    <input type="number" maxLength = "2" placeholder= {employee_age}/>
                    <button id= {id} name = "yes" value="yes" onClick= {handlebutton}>Y</button>
                    <button id= {id} name = "no" value="no" onClick= {handlebutton}>N</button>
                </div>
    )
}

export default EditScreen;