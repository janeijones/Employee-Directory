import React from 'react';

function Search(props) {
    return (
        <form className = "justify-content-start d-flex form-inline">
            <input 
                className = "form-control mr-sm-2"
                value = {props.Search}
                onChange = {e => props.handleFormSubmit(e)}
                placeholder = "Search"
                name = "search"
                />

        </form>
    )
}

export default Search; 