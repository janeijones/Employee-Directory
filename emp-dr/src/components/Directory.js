import React, { Component } from 'react';
import API from "../utils/API";
import Header from "./Header"; 

class Directory extends Component { // directory component defubed as class
    state = {
        search: "",
        results: []
}; 




  render() {
    return <>
    <Header />
    </>
  }
}

export default Directory; 