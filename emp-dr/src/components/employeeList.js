import React from 'react';
import EmployeeInfo from './employeeInfo';

function EmployeeList (props) {
    return (
        <table className = "table mt-4 table-striped">
            <thread>
                <tr>
                    <th scope = "col"> Name </th>
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