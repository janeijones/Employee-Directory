import React from 'react';
import { format } from 'date-fns';

function EmployeeInfo(props) {
    return (
        <tbody>
            {props.resultsDisplay.map(results => (
                <tr key = {results.email}>
                <td>{results.name.first} {results.name.last} </td>
                <td>{results.phone}</td>
                <td>{results.email}</td>
                <td>{ format (new Date(results.dob.date), 'MM/dd/yyyy')}</td>
            
                </tr>
                
            ))}
        </tbody>
    );
       
}


export default EmployeeInfo;