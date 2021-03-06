import React, { Component } from 'react';
import API from "../utils/API";
import Header from "./Header"; 
import EmployeeList from './employeeList';
import Search from "./userSearch.js"

class Directory extends Component { // directory component defubed as class
    state = {
        search: "",
        results: [],
        resultsDisplay: [],
        order: "ascend"
}; 

componentDidMount(){
    API.search()
        .then(res => 
            this.setState({results: res.data.results, resultsDisplay: res.data.results}))
         .catch(err => console.log(err + " - ComponentMount"))   
        
};

handleFormSubmit = (e) => {
    // console.log(e.target.value + " - Handle Form Submit")

    const search = e.target.value; 
    const resultsDisplay = this.state.results.filter(result => {
        let data = Object.values(result).join('').toLowerCase();
        return data.indexOf(search.toLowerCase()) !== -1;

    })
        this.setState({resultsDisplay: resultsDisplay})
};

handleInputChange = (e) => {
    // console.log(e.target + " - Handle Input Change")
    // console.log(e.target.name + " - name")
    // console.log(e.target.value + " - value")
    const name = e.target.name
    const value = e.target.value

    this.setState({[name]: value});

};

sortEmployees = () => {
    //check if asc or des
    if (this.state.order === 'ascend') {
        // console.log(this.state.order + " - should be asc")
        //set to des
        this.setState({order: 'descend'})
    } else {
        // console.log(this.state.order + " - should be dec")
        //set to asc
        this.setState({order: 'ascend'})
    }
    // console.log(this.state.order + " - state changed to")

    if (this.state.order === 'ascend') {
        const sortEmp = this.state.results.sort((a,b) => {
            return (a.name.last < b.name.last) ? -1 : 1 // return employees using asc  
        })
        this.setState({results: sortEmp})
    } else {
        const sortEmp = this.state.results.sort((a,b) => {
            return (b.name.last < a.name.last) ? -1 : 1 // return employees using dec
        })
        this.setState({results: sortEmp})
    }

};



  render() {
    return <>
    <Header />
    <Search handleFormSubmit = {this.handleFormSubmit} /> 
    <EmployeeList resultsDisplay = {this.state.resultsDisplay} sortEmployees={this.sortEmployees} /> 
    </>
  }
}

export default Directory; 