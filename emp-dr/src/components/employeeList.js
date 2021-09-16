import React from 'react';
import EmployeeInfo from './employeeInfo';

function EmployeeList (props) {
    return (
        <table className = "table mt-4 table-striped">
            <thread>
                <tr>
                    <th scope = "col" className = "pb-2"> Name 
                    <button 
                        className = 'btn btn-sm px-0 mx-0' 
                        onClick = {props.sortEmployees}>
                            <i class="fas fa-sort"></i>
                    </button></th>
                    <th scope = "col"> Phone Number </th>
                    <th scope = "col"> Email </th>
                    <th scope = "col"> D.O.B. </th>
                </tr>
            </thread>
                <EmployeeInfo { ...props} />
        </table>
    )
};



export default EmployeeList; 