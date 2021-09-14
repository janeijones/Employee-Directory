import React from 'react';

function employeeInfo(props) {
    return (
        <tbody>
            {props.resultsDisplay.map(results => (
                <tr key = {results.email}>
                <td>{results.name.first} {results.name.last} </td>
                <td>{results.phone}</td>
                <td>{results.email}</td>
            
                </tr>
                
            ))}
        </tbody>
    )
       
}


export default employeeInfo;