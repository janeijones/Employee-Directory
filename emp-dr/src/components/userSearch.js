import React from 'react';

function Search() {
    return (
        <form className = "justify-content-start d-flex form-inline">
            <input 
                className = "form-control mr-sm-2"
                value = {props.Search}
                onChange = {e => props.handleFormSubmit(e)}
                placeholder = "Search"
                />

        </form>
    )
}

export default Search; 