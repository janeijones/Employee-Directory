import React, { Component } from 'react';
import API from "../utils/API";
import Header from "./Header"; 
import EmployeeList from './employeeList';
import Search from "./userSearch.js"

class Directory extends Component { // directory component defubed as class
    state = {
        search: "",
        results: [],
        resultsDisplay: []
}; 

componentDidMount(){
    API.search()
        .then(res => 
            this.setState({results: res.data.results}))
         .catch(err => console.log(err + " - ComponentMount"))   
        
};

handleFormSubmit = (e) => {
    console.log(e.target.value + " - Handle Form Submit")

    const search = e.target.value; 
    const resultsDisplay = this.state.results.filter(result => {
        let info = Object.values(result).join('').toLowerCase();
        return info.indexOf(search.toLowerCase()) !== -1;

    })
        this.setState({resultsDisplay: resultsDisplay})
};

handleInputChange = (e) => {
    console.log(e.target + " - Handle Input Change")
    console.log(e.target.name + " - name")
    console.log(e.target.value + " - value")
    const name = e.target.name
    const value = e.target.value

    this.setState({[name]: value});

};

sortEmployees = () => {
    //check if asc or des
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