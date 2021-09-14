import React, { Component } from 'react';
import API from "../utils/API";
import Header from "./Header"; 
import EmployeeList from './employeeList';
import Search from "./userSearch.js"

class Directory extends Component { // directory component defubed as class
    state = {
        search: "",
        results: []
}; 

componentDidMount(){
    API.search()
        .then(res => 
            this.setState({results: res.data.results}))
         .catch(err => console.log(err + " - ComponentMount"))   
        
};

handleFormSubmit = (e) => {
    console.log(e.target.value + " - Handle Form Submit")
    
} 



  render() {
    return <>
    <Header />
    <Search /> 
    <EmployeeList /> 
    </>
  }
}

export default Directory; 