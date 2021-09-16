import React from 'react';

function Search() {
    return (
        <form>
            <input 
                className = "justify-content-center d-flex form-inline"
                value = {props.Search}
                onChange = {e => props.handleFormSubmit(e)} //event here
                placeholder = "Search"
                />

        </form>
    )
}

export default Search; 